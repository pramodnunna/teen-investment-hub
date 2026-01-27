
# Fix Email Notifications for Consultation Form

## Issues Found

1. **Wrong Supabase URL**: The consultation form is calling edge functions on an OLD Supabase project (`jmgvggdcdskuwogochxy`), not your newly connected project (`bydtcfesvqpcrpyiabbv`)

2. **Missing RESEND_API_KEY**: The new Supabase project doesn't have the Resend API key configured

3. **Edge function not deployed**: The `send-consultation-email` function needs to be deployed to the new project

4. **Missing database tables**: The new project has no tables - the form tries to insert into `school_consultations` but that table doesn't exist

## Implementation Plan

### Step 1: Add RESEND_API_KEY Secret
You need to add your Resend API key to the new Supabase project:
- Go to https://supabase.com/dashboard/project/bydtcfesvqpcrpyiabbv/settings/functions
- Add secret: `RESEND_API_KEY` with your Resend API key value
- If you don't have one, get it from https://resend.com/api-keys

### Step 2: Create Database Tables
Create the required tables in the new Supabase project:
- `school_consultations` - for storing consultation requests
- `contacts` - for contact form submissions  
- `phone_leads` - for phone number leads
- `user_signups` - for user signups

### Step 3: Update Edge Function URL
Update the consultation form to call the correct Supabase project:
- Change URL from `https://jmgvggdcdskuwogochxy.supabase.co/functions/v1/send-consultation-email`
- To: `https://bydtcfesvqpcrpyiabbv.supabase.co/functions/v1/send-consultation-email`
- Update the Authorization header with the new anon key

### Step 4: Deploy Edge Function
Deploy the `send-consultation-email` function to the new project

---

## Technical Details

### Database Schema (SQL Migration)
```sql
-- School consultations table
CREATE TABLE school_consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  student_count INTEGER,
  additional_info TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Contacts table
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Phone leads table
CREATE TABLE phone_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- User signups table
CREATE TABLE user_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  user_type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### Frontend Code Changes
Update `src/components/consultation/ConsultationFormContent.tsx`:
- Replace hardcoded old URL with new project URL
- Use correct anon key for authorization

## User Action Required
Before I can implement these changes, please:
1. **Add your RESEND_API_KEY** to Supabase Edge Function secrets at https://supabase.com/dashboard/project/bydtcfesvqpcrpyiabbv/settings/functions
2. Confirm you want me to proceed with creating the database tables and updating the code

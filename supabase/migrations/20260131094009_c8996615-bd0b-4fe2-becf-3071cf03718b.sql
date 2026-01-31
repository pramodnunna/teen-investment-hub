-- Add explicit SELECT denial policies to prevent public data exposure
-- These policies ensure only service role (admins) can read the data

-- For contacts table - deny all SELECT for anon users
CREATE POLICY "Deny public read access to contacts"
ON public.contacts
FOR SELECT
USING (false);

-- For phone_leads table - deny all SELECT for anon users
CREATE POLICY "Deny public read access to phone_leads"
ON public.phone_leads
FOR SELECT
USING (false);

-- For school_consultations table - deny all SELECT for anon users
CREATE POLICY "Deny public read access to school_consultations"
ON public.school_consultations
FOR SELECT
USING (false);

-- For user_signups table - deny all SELECT for anon users
CREATE POLICY "Deny public read access to user_signups"
ON public.user_signups
FOR SELECT
USING (false);
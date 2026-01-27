-- Enable RLS on all tables
ALTER TABLE school_consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE phone_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_signups ENABLE ROW LEVEL SECURITY;

-- Create public insert policies (these are lead capture forms - anyone can submit)
CREATE POLICY "Anyone can insert school consultations" ON school_consultations FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert contacts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert phone leads" ON phone_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert user signups" ON user_signups FOR INSERT WITH CHECK (true);
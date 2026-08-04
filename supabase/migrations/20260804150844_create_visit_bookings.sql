/*
# Create visit_bookings table (single-tenant, no auth)

1. Purpose
- Stores visit/booking requests submitted by visitors through the public
  website contact form for the Vineyard 211 winery in Levidi, Arcadia.
- No sign-in / accounts on this site, so this is a single-tenant public form.

2. New Tables
- `visit_bookings`
  - `id` (uuid, primary key)
  - `name` (text, not null) — visitor full name
  - `email` (text, not null) — visitor email
  - `phone` (text, nullable) — optional phone
  - `visit_date` (date, nullable) — requested visit date
  - `guests` (int, nullable) — number of guests
  - `message` (text, nullable) — free text / notes
  - `created_at` (timestamptz, default now)

3. Security
- Enable RLS on `visit_bookings`.
- Allow anon + authenticated INSERT only (public form submission).
  No SELECT/UPDATE/DELETE for anon to keep submissions private.
*/

CREATE TABLE IF NOT EXISTS visit_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  visit_date date,
  guests integer,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE visit_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_visit_bookings" ON visit_bookings;
CREATE POLICY "anon_insert_visit_bookings" ON visit_bookings
  FOR INSERT TO anon, authenticated WITH CHECK (true);

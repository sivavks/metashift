-- Run this once in the Supabase SQL editor for this project.
-- Creates the table the "Begin Your MetaShift" modal writes to.

create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  area text not null,
  reflection text
);

-- Row Level Security stays on; the app writes via the service role key
-- (server-side only), which bypasses RLS by design. No public policies
-- are needed or should be added.
alter table submissions enable row level security;

-- Run this for the "Reserve My Seat" form on /first-shift.

create table if not exists reservations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  city text
);

alter table reservations enable row level security;

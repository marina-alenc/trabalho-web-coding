-- Rode no Supabase: SQL Editor -> New query -> Run

create table if not exists pets (
  id bigint generated always as identity primary key,
  criado_em timestamptz default now(),
  nome_pet text not null,
  especie text not null,
  raca text not null,
  idade int,
  porte text,
  nome_tutor text not null,
  telefone text not null,
  email text not null,
  obs text
);

create table if not exists agendamentos (
  id bigint generated always as identity primary key,
  criado_em timestamptz default now(),
  tutor text not null,
  pet text not null,
  servico text not null,
  telefone text not null,
  data date not null,
  horario text not null,
  obs text
);

-- Seguranca (RLS): o site so pode INSERIR; ninguem de fora le os dados
alter table pets enable row level security;
alter table agendamentos enable row level security;

drop policy if exists "site pode cadastrar pets" on pets;
create policy "site pode cadastrar pets" on pets
  for insert to anon with check (true);

drop policy if exists "site pode agendar" on agendamentos;
create policy "site pode agendar" on agendamentos
  for insert to anon with check (true);

---
title: Rental Studio
description: Property management and renovation planning platform for landlords with interactive floor plans.
pubDate: 2026-01-24
repository: https://github.com/bitcraft-apps/rental-studio
tags:
  - Bun
  - Hono
  - HTMX
  - PostgreSQL
  - Property Management
status: in-progress
---

A comprehensive platform for landlords to manage properties and plan renovations with interactive SVG-based floor plans.

## Planned Features

### MVP - Renovation Planning

- Interactive floor plans with hotspots
- Layer system (electrical, furniture, fixtures)
- Design project variants
- Secure sharing with collaborators

### Future - Tenant Portal

- Magic link authentication
- Issue reporting and tracking
- Document management (contracts, manuals)
- Payment tracking
- Equipment inventory

## Tech Stack

| Component | Technology                        |
| --------- | --------------------------------- |
| Runtime   | Bun                               |
| Backend   | Hono                              |
| Frontend  | Hono JSX + HTMX                   |
| Database  | PostgreSQL + Drizzle ORM          |
| Email     | Resend                            |
| Hosting   | Hetzner (Docker) + Cloudflare CDN |

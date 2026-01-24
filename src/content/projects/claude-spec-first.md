---
title: Claude Spec-First Framework
description: Minimalist development workflow for Claude Code following YAGNI, KISS, and SRP principles. Build the smallest thing that works.
pubDate: 2025-08-22
repository: https://github.com/bitcraft-apps/claude-spec-first
tags:
  - featured
  - Claude
  - Developer Tools
  - Workflow
status: released
---

A lightweight framework that provides 12 specialized micro-agents and 3 workflow commands for specification-driven development with Claude Code.

## Features

- **3-Phase Workflow**: `/csf:spec`, `/csf:implement`, `/csf:document`
- **12 Micro-Agents**: Specialized agents for specification, implementation, and documentation
- **Technology Agnostic**: Works with any project type
- **Self-Documenting**: Generates technical and user documentation automatically

## Core Philosophy

- **YAGNI**: Don't build it until you need it
- **KISS**: Simplest solution that works
- **SRP**: Each component does one thing
- **MVP First**: Deliver narrowest viable change

## Workflow Commands

### `/csf:spec [REQUIREMENTS]`

Create specifications through parallel analysis. Define what to build and why.

### `/csf:implement [SPECIFICATION_OR_PATH]`

Implement through pattern learning. Build the minimal working solution.

### `/csf:document [SPEC_PATH] [IMPLEMENTATION_PATH]`

Document through comprehensive analysis. Generate technical and user documentation.

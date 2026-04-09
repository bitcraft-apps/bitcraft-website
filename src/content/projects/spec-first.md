---
title: Spec First
description: Build faster by writing requirements before code. A Claude Code plugin for spec-driven development.
pubDate: 2025-09-24
repository: https://github.com/bitcraft-apps/spec-first
tags:
  - featured
  - Claude Code
  - Developer Tools
  - Workflow
status: maintained
---

A Claude Code plugin that enforces a three-step workflow: define what to build, implement it from the spec, and generate documentation — all from your terminal.

## Features

- **3-Phase Workflow**: `/sf:spec`, `/sf:implement`, `/sf:document`
- **Specialized Agents**: Parallel micro-agents for specification, implementation, and documentation
- **Technology Agnostic**: Works with any project type
- **Self-Documenting**: Generates technical and user documentation automatically

## Core Philosophy

- **YAGNI**: Don't build it until you need it
- **KISS**: Simplest solution that works
- **SRP**: Each component does one thing
- **MVP First**: Deliver narrowest viable change

## Workflow Commands

### `/sf:spec [REQUIREMENTS]`

Create specifications through parallel analysis. Define what to build and why.

### `/sf:implement [SPECIFICATION_OR_PATH]`

Implement through pattern learning. Build the minimal working solution.

### `/sf:document [SPEC_PATH] [IMPLEMENTATION_PATH]`

Document through comprehensive analysis. Generate technical and user documentation.

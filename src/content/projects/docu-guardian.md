---
title: DocuGuardian
description: Intelligent document management app for organizing personal documents with automated expiry detection and reminder system.
pubDate: 2025-03-31
repository: https://github.com/bitcraft-apps/docu-guardian
tags:
  - Swift
  - iOS
  - macOS
  - Document Management
status: in-progress
---

A native Apple platform application focused on organizing important personal documents—warranties, contracts, receipts, insurance policies—with smart date recognition.

## Features

- **Document Scanning**: Camera integration for capturing documents
- **Intelligent OCR**: Text extraction with automatic date recognition
- **Expiry Tracking**: Date detection with customizable reminders
- **Document Organization**: Categorization by type, date, and tags
- **Security**: Local storage with encryption

## Tech Stack

- Swift 6.2+ / SwiftUI
- iOS 17.0+
- Shared core and UI packages for iOS and macOS

## Architecture

The project uses a monorepo structure with shared packages:

- `apps/ios/`: iOS application
- `apps/macos/`: Future macOS application
- `packages/core/`: Shared business logic
- `packages/ui/`: Shared UI components

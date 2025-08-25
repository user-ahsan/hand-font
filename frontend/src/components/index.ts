/*
 * HandFont Components Library
 * 
 * This is the main entry point for all components in the HandFont application.
 * Components are organized by category and imported from their respective directories.
 * 
 * Directory Structure:
 * - ui/          - shadcn/ui components (installed via CLI)
 * - magicui/     - Magic UI components (installed via CLI)
 * - handfont/    - Custom HandFont-specific components
 * - layout/      - Layout and structural components
 * - forms/       - Form-related components
 * 
 * Usage:
 * import { Button } from '@/components/ui/button'
 * import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
 * import { ProBadge } from '@/components/handfont/ProBadge'
 * import { Container } from '@/components/layout/Container'
 * import { Form } from '@/components/forms/Form'
 */

// Re-export all components from their respective directories
export * from './ui';
export * from './magicui';
export * from './handfont';
export * from './layout';
export * from './forms';

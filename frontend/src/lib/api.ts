import axios from 'axios';
import type { PortfolioInfo, Project, SkillCategory } from '@/types';

// The base URL for all API calls
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:7000/api';

// One axios instance used by all functions below
const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

// ─── Contact ───────────────────────────────────────────────────────────────

// Send the contact form data to the backend
export async function submitContactForm(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ message: string }> {
  const res = await api.post<{ message: string }>('/contact', payload);
  return res.data;
}

// ─── Status ────────────────────────────────────────────────────────────────

// Check if the backend is running
export async function fetchStatus(): Promise<{ status: string }> {
  const res = await api.get<{ status: string }>('/health');
  return res.data;
}

// ─── Portfolio ─────────────────────────────────────────────────────────────

// Get name, title, tagline, social links, email
export async function fetchPortfolioInfo(): Promise<PortfolioInfo> {
  const res = await api.get<{ data: PortfolioInfo }>('/portfolio');
  return res.data.data;
}

// Get the list of projects
export async function fetchProjects(): Promise<Project[]> {
  const res = await api.get<{ data: Project[] }>('/portfolio/projects');
  return res.data.data;
}

// Get the skills grouped by category
export async function fetchSkills(): Promise<SkillCategory> {
  const res = await api.get<{ data: SkillCategory }>('/portfolio/skills');
  return res.data.data;
}

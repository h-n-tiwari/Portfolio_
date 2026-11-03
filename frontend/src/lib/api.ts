import type { PortfolioInfo, Project, SkillCategory } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:7000/api';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  const data = await res.json() as unknown;

  if (!res.ok) {
    const errData = data as { error?: string };
    throw new Error(errData.error ?? `Request failed with status ${res.status}`);
  }

  return data as T;
}

export async function submitContactForm(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ message: string }> {
  return request<{ message: string }>('/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function fetchHealth(): Promise<{ status: string }> {
  return request<{ status: string }>('/health');
}

export async function fetchPortfolioInfo(): Promise<PortfolioInfo> {
  const res = await request<{data: PortfolioInfo }>('/portfolio');
  return res.data;
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await request<{ data: Project[] }>('/portfolio/projects');
  return res.data;
}

export async function fetchSkills(): Promise<SkillCategory> {
  const res = await request<{ data: SkillCategory }>('/portfolio/skills');
  return res.data;
}
export interface HealthCheckResponse {
  status: "healthy" | "unhealthy";
  timestamp: string;
  details?: Record<string, unknown>;
}

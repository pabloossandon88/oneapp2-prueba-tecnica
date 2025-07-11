export interface ResponsePayload {
    email: string;
    language: string;
    motivation: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export async function submitResponse(data: ResponsePayload) {
    const res = await fetch(`${API_URL}/api/responses`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    });

    if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.errors?.[0]?.msg || "Error al enviar el formulario");
    }

    return await res.json();
}

export async function fetchCount() {
    const res = await fetch(`${API_URL}/responses/count`);
    if (!res.ok) throw new Error('Error al obtener count');
    return res.json();
}

export async function checkIfEmailExists(email: string): Promise<boolean> {
    const res = await fetch(`${API_URL}/responses/${encodeURIComponent(email)}`);
  
    if (res.ok) {
      const data = await res.json();
      return true; // El email existe
    }
  
    if (res.status === 404) {
      return false; // El email no existe
    }
  
    throw new Error("No se pudo validar el email");
  }
  
  export async function sendFormData(data: {
    email: string;
    language: string;
    motivation: string;
  }) {
    const res = await fetch(`${API_URL}/responses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Error al enviar formulario");
    }
  
    return res.json();
  }
  

  export async function fetchRecent() {
    const res = await fetch(`${API_URL}/responses/recent`);
    if (!res.ok) throw new Error('Error al obtener recent');
    return res.json();
  }
  
  export async function fetchStats() {
    const res = await fetch(`${API_URL}/responses/stats`);
    if (!res.ok) throw new Error('Error al obtener stats');
    return res.json();
  }
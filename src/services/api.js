const API_BASE = 'http://127.0.0.1:8088/api';

export const api = {
  // Get restaurant general info
  async getInfo() {
    try {
      const res = await fetch(`${API_BASE}/info`);
      if (!res.ok) throw new Error('API error');
      return await res.json();
    } catch (e) {
      console.warn('Backend offline, using local info', e);
      return null;
    }
  },

  // Get dynamic menu
  async getMenu(category = '') {
    try {
      const url = category ? `${API_BASE}/menu?category=${category}` : `${API_BASE}/menu`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('API error');
      return await res.json();
    } catch (e) {
      console.warn('Backend offline, using local menu', e);
      return null;
    }
  },

  // Submit a reservation to Python FastAPI + SQLite
  async createReservation(data) {
    try {
      const res = await fetch(`${API_BASE}/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          date: data.date,
          time: data.time,
          guests: parseInt(data.guests, 10) || 2,
          area: data.area || 'main',
          notes: data.notes || ''
        })
      });
      if (!res.ok) throw new Error('Reservation API error');
      return await res.json();
    } catch (e) {
      console.warn('Error submitting to API, falling back to simulated confirmation', e);
      return {
        booking_code: 'LG-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        ...data,
        status: 'pending'
      };
    }
  },

  // List all reservations (for restaurant admin view)
  async getReservations() {
    try {
      const res = await fetch(`${API_BASE}/reservations`);
      if (!res.ok) throw new Error('API error');
      return await res.json();
    } catch (e) {
      return [];
    }
  },

  // Update reservation status
  async updateReservationStatus(id, status) {
    try {
      const res = await fetch(`${API_BASE}/reservations/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      return await res.json();
    } catch (e) {
      return null;
    }
  }
};

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'employee';
  status: 'active' | 'inactive';
}

export interface Table {
  id: string;
  number: number;
  capacity: number;
  status: 'available' | 'reserved' | 'occupied';
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  available: boolean;
}

export interface Order {
  id: string;
  tableId: string;
  items: Array<{
    menuItemId: string;
    quantity: number;
    notes?: string;
  }>;
  status: 'pending' | 'preparing' | 'served' | 'completed' | 'cancelled';
  total: number;
  createdAt: Date;
  updatedAt: Date;
}
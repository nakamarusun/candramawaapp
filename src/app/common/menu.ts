export interface Menu {
  name: string;
  href: string;
  icon: string;
}

export const menus: Menu[] = [
  {
    name: 'Home',
    href: '/',
    icon: 'home',
  },
  {
    name: 'Produk',
    href: '/products',
    icon: 'color_lens',
  },
];

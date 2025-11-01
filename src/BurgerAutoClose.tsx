import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Добавь это, если TypeScript жалуется
declare const bootstrap: any;

export function BurgerAutoClose() {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.getElementById('navbarSupportedContent');
    const bsCollapse = bootstrap.Collapse.getInstance(navbar); // если меню уже открыто

    if (bsCollapse) {
      bsCollapse.hide();
    } else if (navbar && navbar.classList.contains('show')) {
      // fallback если нет экземпляра bootstrap.Collapse
      navbar.classList.remove('show');
    }
  }, [location]);

  return null;
}

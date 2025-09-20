import React, { createContext, useContext, useState, useEffect } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  price: string;
  visible: boolean;
}

interface SiteSettings {
  siteName: string;
  primaryColor: string;
  secondaryColor: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
}

interface AdminContextType {
  isAdmin: boolean;
  services: Service[];
  siteSettings: SiteSettings;
  login: (password: string) => boolean;
  logout: () => void;
  updateService: (id: string, updates: Partial<Service>) => void;
  toggleServiceVisibility: (id: string) => void;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  addService: (service: Omit<Service, 'id'>) => void;
  deleteService: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_PASSWORD = 'admin123'; // في التطبيق الحقيقي، يجب استخدام نظام مصادقة آمن

const defaultServices: Service[] = [
  {
    id: '1',
    title: 'تطوير المواقع المخصصة',
    description: 'مواقع ويب احترافية ومتجاوبة مبنية بأحدث التقنيات ومحسنة للأداء.',
    category: 'تطوير الويب',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'TypeScript'],
    price: '$2,500',
    visible: true
  },
  {
    id: '2',
    title: 'تطوير تطبيقات الجوال',
    description: 'تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS و Android مع تجارب مستخدم سلسة.',
    category: 'تطوير الجوال',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'Flutter', 'Swift'],
    price: '$4,000',
    visible: true
  },
  {
    id: '3',
    title: 'خدمات تصميم UI/UX',
    description: 'نهج تصميم يركز على المستخدم لإنشاء واجهات بديهية وتجارب مستخدم استثنائية.',
    category: 'التصميم',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Figma', 'Adobe XD', 'Sketch'],
    price: '$1,800',
    visible: true
  },
  {
    id: '4',
    title: 'حلول التجارة الإلكترونية',
    description: 'متاجر إلكترونية كاملة مع تكامل الدفع وإدارة المخزون وتحليلات العملاء.',
    category: 'التجارة الإلكترونية',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Shopify', 'WooCommerce', 'Stripe'],
    price: '$3,500',
    visible: true
  }
];

const defaultSiteSettings: SiteSettings = {
  siteName: 'VEXTRONIC',
  primaryColor: '#10b981',
  secondaryColor: '#1f2937',
  heroTitle: 'خدمات رقمية لعقلية النمو',
  heroSubtitle: 'حوّل عملك مع مجموعتنا الشاملة من الخدمات الرقمية. من التطوير إلى التصميم، من الذكاء الاصطناعي إلى الأمن السيبراني - نحن نقدم التميز.',
  aboutText: 'نحن شركة خدمات رقمية تفكر في المستقبل وتحول الأعمال من خلال حلول تقنية مبتكرة.',
  contactEmail: 'hello@vextronic.com',
  contactPhone: '+1 (555) 123-4567',
  contactAddress: 'San Francisco, CA'
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(defaultSiteSettings);

  useEffect(() => {
    const savedAuth = localStorage.getItem('adminAuth');
    const savedServices = localStorage.getItem('adminServices');
    const savedSettings = localStorage.getItem('adminSettings');
    
    if (savedAuth === 'true') {
      setIsAdmin(true);
    }
    
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    }
    
    if (savedSettings) {
      setSiteSettings(JSON.parse(savedSettings));
    }
  }, []);

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem('adminAuth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('adminAuth');
  };

  const updateService = (id: string, updates: Partial<Service>) => {
    const updatedServices = services.map(service =>
      service.id === id ? { ...service, ...updates } : service
    );
    setServices(updatedServices);
    localStorage.setItem('adminServices', JSON.stringify(updatedServices));
  };

  const toggleServiceVisibility = (id: string) => {
    const updatedServices = services.map(service =>
      service.id === id ? { ...service, visible: !service.visible } : service
    );
    setServices(updatedServices);
    localStorage.setItem('adminServices', JSON.stringify(updatedServices));
  };

  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    const updatedSettings = { ...siteSettings, ...settings };
    setSiteSettings(updatedSettings);
    localStorage.setItem('adminSettings', JSON.stringify(updatedSettings));
  };

  const addService = (service: Omit<Service, 'id'>) => {
    const newService = { ...service, id: Date.now().toString() };
    const updatedServices = [...services, newService];
    setServices(updatedServices);
    localStorage.setItem('adminServices', JSON.stringify(updatedServices));
  };

  const deleteService = (id: string) => {
    const updatedServices = services.filter(service => service.id !== id);
    setServices(updatedServices);
    localStorage.setItem('adminServices', JSON.stringify(updatedServices));
  };

  return (
    <AdminContext.Provider value={{
      isAdmin,
      services,
      siteSettings,
      login,
      logout,
      updateService,
      toggleServiceVisibility,
      updateSiteSettings,
      addService,
      deleteService
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
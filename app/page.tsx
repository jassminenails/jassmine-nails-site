'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  ArrowLeft,
  ArrowRight,
  Camera,
  Share2,
  Instagram,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  User,
  Phone,
  ShieldAlert,
  Eye,
  Copy,
  ExternalLink,
  MessageCircle,
  Sparkles,
  DollarSign,
  X,
  Check,
  Search,
  Calendar as CalendarIcon,
} from 'lucide-react';

type Service = {
  id: string;
  category: string;
  name: string;
  price: string;
  duration: string;
  notes: string;
};

type Course = {
  id: string;
  name: string;
  modality: string;
  date: string;
  spots: string;
  price: string;
  deposit: string;
  temario: string[];
};

type Booking = {
  id: string;
  clientName: string;
  phone: string;
  serviceSummary: string;
  services: string[];
  price: string;
  duration: string;
  deposit: string;
  date: string;
  time: string;
  status: string;
  created: string;
};

const INITIAL_SERVICES: Service[] = [
  {
    id: '1',
    category: '01 Técnicas y extensiones',
    name: 'Esmaltado semipermanente',
    price: '12.000',
    duration: '60 min',
    notes: 'Incluye limado, repujado y 1 color a elección',
  },
  {
    id: '2',
    category: '01 Técnicas y extensiones',
    name: 'Kapping gel',
    price: '15.000',
    duration: '90 min',
    notes: 'Capa protectora para uñas naturales frágiles',
  },
  {
    id: '3',
    category: '01 Técnicas y extensiones',
    name: 'Soft gel',
    price: '18.000',
    duration: '90 min',
    notes: 'Extensiones ligeras de alta durabilidad',
  },
  {
    id: '4',
    category: '01 Técnicas y extensiones',
    name: 'Uñas esculpidas',
    price: '22.000',
    duration: '120 min',
    notes: 'Esculpido acrílico/gel profesional con largo a elección',
  },
  {
    id: '5',
    category: '02 Mantenimiento',
    name: 'Reparación por uña',
    price: '2.500',
    duration: '20 min',
    notes: 'Arreglo individual de rotura o levantamiento',
  },
  {
    id: '6',
    category: '02 Mantenimiento',
    name: 'Retiro de material',
    price: '4.000',
    duration: '30 min',
    notes: 'Retiro cuidadoso sin dañar la uña natural',
  },
];

const PACKS = [
  {
    id: 'p1',
    name: 'Pack Mensual Manos Perfectas',
    price: '25.000',
    originalPrice: '29.000',
    items: ['2x Esmaltado Semipermanente', '1x Kapping Gel de refuerzo'],
    detail: 'Ideal para mantener tus uñas impecables todo el mes.',
  },
];

const COURSES: Course[] = [
  {
    id: 'c1',
    name: 'Manicura Rusa & Capping',
    modality: 'Presencial',
    date: '2 Clases (12 y 19 de Nov)',
    spots: '6 vacantes',
    price: '18.000',
    deposit: '5.000',
    temario: [
      'Preparación de placa ungueal',
      'Uso correcto de fresas y cutículas',
      'Nivelación con Base Rubber / Capping',
    ],
  },
  {
    id: 'c2',
    name: 'Soft Gel & Nail Art Express',
    modality: 'Online en Vivo',
    date: '25 de Noviembre',
    spots: '15 vacantes',
    price: '10.000',
    deposit: '3.000',
    temario: [
      'Adhesión correcta de tips de soft gel',
      'Esculpido exprés y limado',
      'Diseños en tendencia y encapsulados',
    ],
  },
];

const NAV_ITEMS = [
  { id: 'portada', label: 'Portada' },
  { id: 'servicios', label: 'Todos los servicios' },
  { id: 'turnos', label: 'Turnos' },
  { id: 'cursos', label: 'Cursos' },
  { id: 'gastos', label: 'Gastos' },
  { id: 'senas', label: 'Señas' },
  { id: 'politica', label: 'Política de seña' },
  { id: 'pagos', label: 'Métodos de pago' },
  { id: 'packs', label: 'Packs de turnos' },
  { id: 'subscripciones', label: 'Subscripciones' },
];

const initialBookings: Booking[] = [
  {
    id: 'BK-8921',
    clientName: 'Sofía Martínez',
    phone: '1123456789',
    serviceSummary: 'Kapping gel',
    services: ['Kapping gel'],
    price: '15.000',
    deposit: '2.000',
    date: '2026-10-05',
    time: '14:00',
    status: 'Confirmado (Seña abonada)',
    created: '04/10/2026',
  },
];

const parsePrice = (priceStr?: string) => {
  if (!priceStr) return 0;
  return parseInt(String(priceStr).replace(/\./g, '').replace(/,/g, ''), 10) || 0;
};

const parseDuration = (durationStr?: string) => {
  if (!durationStr) return 0;
  const match = String(durationStr).match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

const formatPrice = (amount: number) => amount.toLocaleString('es-AR');

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  let formatted = date.toLocaleDateString('es-AR', options);
  return formatted.replace(/\b\w/g, (l) => l.toUpperCase());
};

export default function JassmineNailsApp() {
  const [viewMode, setViewMode] = useState<'admin' | 'client'>('admin');
  const [activeTab, setActiveTab] = useState('servicios');
  const [currentDate, setCurrentDate] = useState(new Date('2026-10-04'));
  const [clientStep, setClientStep] = useState('catalog');
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedDate, setSelectedDate] = useState('2026-10-05');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [copiedAlias, setCopiedAlias] = useState(false);
  const [searchPhone, setSearchPhone] = useState('');
  const [searchedBookings, setSearchedBookings] = useState<Booking[] | null>(null);
  const [clientData, setClientData] = useState({ name: '', phone: '', instagram: '', notes: '' });
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);

  useEffect(() => {
    const saved = window.localStorage.getItem('jassmine-bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch {
        setBookings(initialBookings);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('jassmine-bookings', JSON.stringify(bookings));
  }, [bookings]);

  const totalServicePrice = useMemo(
    () => selectedServices.reduce((sum, s) => sum + parsePrice(s.price), 0),
    [selectedServices],
  );

  const totalServiceDuration = useMemo(
    () => selectedServices.reduce((sum, s) => sum + parseDuration(s.duration), 0),
    [selectedServices],
  );

  const toggleServiceSelection = (service: Service) => {
    const exists = selectedServices.some((s) => s.id === service.id || s.name === service.name);

    if (exists) {
      setSelectedServices((current) =>
        current.filter((s) => s.id !== service.id && s.name !== service.name),
      );
      return;
    }

    setSelectedServices((current) => [...current, service]);
  };

  const changeDate = (days: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  const handleCopyAlias = async () => {
    try {
      await navigator.clipboard.writeText('jassmine.nails.mp');
      setCopiedAlias(true);
      setTimeout(() => setCopiedAlias(false), 2000);
    } catch {
      setCopiedAlias(false);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceNames = selectedServices.map((s) => s.name);
    const newBooking: Booking = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName: clientData.name || 'Cliente',
      phone: clientData.phone,
      services: serviceNames,
      serviceSummary: serviceNames.join(' + '),
      price: formatPrice(totalServicePrice),
      duration: `${totalServiceDuration} min`,
      deposit: '2.000',
      date: selectedDate,
      time: selectedTime || '14:00',
      status: 'Pendiente de verificación de seña',
      created: new Date().toLocaleDateString('es-AR'),
    };

    setBookings((current) => [newBooking, ...current]);
    setClientStep('success');
  };

  const handleSearchBookings = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchPhone.trim()) return;
    const found = bookings.filter((b) => b.phone.includes(searchPhone.trim()));
    setSearchedBookings(found);
  };

  const renderNav = () => (
    <div className="nav-wrap">
      <div className="nav-scroll">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );

  const renderAdminHeader = () => (
    <header className="topbar">
      <div className="topbar-brand">
        <span className="status-dot" />
        <h1>Jassmine Nails · Admin</h1>
      </div>
      <button onClick={() => setViewMode('client')} className="primary-button small-button">
        <Eye size={14} /> Ver como clienta
      </button>
    </header>
  );

  return (
    <div className="theme-shell">
      {viewMode === 'admin' ? (
        <div>
          {renderAdminHeader()}
          {renderNav()}
          <main className="app-content admin-panel">
            {activeTab === 'servicios' && (
              <div className="stack-space">
                <section className="hero-card dark-card">
                  <div className="eyebrow">Catálogo · Jassmine Nails</div>
                  <h1>Todos los servicios</h1>
                  <p>
                    Administrá los tratamientos, precios y duraciones de tu salón.
                  </p>
                  <button className="primary-button wide-button">
                    <Plus size={16} /> Agregar servicio
                  </button>
                </section>

                {INITIAL_SERVICES.map((service) => (
                  <article key={service.id} className="service-card">
                    <div className="card-row">
                      <h3>{service.name}</h3>
                      <span className="service-price">$ {service.price}</span>
                    </div>
                    <div className="muted-list">
                      <p>Duración · {service.duration}</p>
                      <p>{service.notes}</p>
                    </div>
                    <div className="mini-actions">
                      <button aria-label="Editar servicio">
                        <Edit2 size={14} />
                      </button>
                      <button aria-label="Eliminar servicio">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {activeTab === 'turnos' && (
              <div className="panel-card">
                <div className="date-switcher">
                  <button onClick={() => changeDate(-1)} aria-label="Día anterior">←</button>
                  <div>
                    <h1>Turnos del día</h1>
                    <p>{formatDate(currentDate)}</p>
                  </div>
                  <button onClick={() => changeDate(1)} aria-label="Día siguiente">→</button>
                </div>

                <div className="booking-block">
                  <div className="booking-header">
                    <span>14:00 hs</span>
                    <span className="tag dark-tag">Reservado</span>
                  </div>
                  <p>Sofía Martínez · Kapping Gel</p>
                </div>
              </div>
            )}

            {activeTab === 'cursos' && (
              <div className="panel-card">
                <h2>Curso activo</h2>
                <div className="course-summary">
                  <p>Manicura Rusa & Capping</p>
                  <span>6 vacantes · 18.000</span>
                </div>
              </div>
            )}

            {activeTab === 'packs' && (
              <div className="panel-card pack-card">
                <h2>Pack premium</h2>
                {PACKS.map((pack) => (
                  <div key={pack.id} className="pack-item">
                    <h3>{pack.name}</h3>
                    <div className="pack-pricing">
                      <strong>$ {pack.price}</strong>
                      <span>$ {pack.originalPrice}</span>
                    </div>
                    <ul>
                      {pack.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p>{pack.detail}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab !== 'servicios' &&
              activeTab !== 'turnos' &&
              activeTab !== 'cursos' &&
              activeTab !== 'packs' && (
                <div className="panel-card empty-panel">
                  <h2>Sección {activeTab}</h2>
                  <p>Panel de configuración activo para {activeTab}.</p>
                </div>
              )}
          </main>
        </div>
      ) : (
        <div className="client-shell">
          <div className="client-topbar">
            <span>✨ Vista de Clienta</span>
            <button onClick={() => setViewMode('admin')} className="primary-button dark-button small-button">
              Volver a Admin
            </button>
          </div>

          <div className="hero-banner">
            <img
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1000&q=80"
              alt="Jassmine Nails"
            />
            <div className="hero-overlay">
              <span className="pill">Beauty Salon</span>
              <h1>Jassmine Nails</h1>
            </div>
          </div>

          <nav className="client-nav">
            <button
              onClick={() => setClientStep('catalog')}
              className={clientStep !== 'my-bookings' && clientStep !== 'courses' ? 'active' : ''}
            >
              Reservar Turno
            </button>
            <button
              onClick={() => setClientStep('courses')}
              className={clientStep === 'courses' ? 'active' : ''}
            >
              Cursos
            </button>
            <button
              onClick={() => setClientStep('my-bookings')}
              className={clientStep === 'my-bookings' ? 'active' : ''}
            >
              Mis Turnos
            </button>
          </nav>

          {clientStep === 'courses' && (
            <section className="stack-space padded-section">
              <h2 className="section-title">Capacitaciones Disponibles</h2>
              {COURSES.map((course) => (
                <article key={course.id} className="course-card">
                  <div className="card-row">
                    <span className="tag soft-tag">{course.modality}</span>
                    <span className="course-price">$ {course.price}</span>
                  </div>
                  <h3>{course.name}</h3>
                  <p className="tiny-meta">📅 {course.date} · 👥 {course.spots}</p>
                  <div className="info-box">
                    <strong>Temario:</strong> {course.temario.join(', ')}.
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCourse(course);
                      setClientStep('form');
                    }}
                    className="primary-button full-button"
                  >
                    ✨ Reservar vacante (Seña ${course.deposit})
                  </button>
                </article>
              ))}
            </section>
          )}

          {clientStep === 'catalog' && (
            <section className="stack-space padded-section">
              {INITIAL_SERVICES.map((service) => {
                const isSelected = selectedServices.some((item) => item.id === service.id);

                return (
                  <article key={service.id} className={`selectable-card ${isSelected ? 'selected' : ''}`}>
                    <div className="card-row">
                      <h3>{service.name}</h3>
                      <span className="service-price">$ {service.price}</span>
                    </div>
                    <p className="note-line">{service.notes} ({service.duration})</p>
                    <button onClick={() => toggleServiceSelection(service)} className={`full-button select-button ${isSelected ? 'selected-btn' : ''}`}>
                      {isSelected ? (
                        <>
                          <Check size={14} /> Seleccionado
                        </>
                      ) : (
                        '+ Agregar servicio'
                      )}
                    </button>
                  </article>
                );
              })}

              {selectedServices.length > 0 && (
                <div className="floating-summary">
                  <div>
                    <div className="summary-meta">
                      {selectedServices.length} servicios · {totalServiceDuration} min
                    </div>
                    <div className="summary-price">$ {formatPrice(totalServicePrice)}</div>
                  </div>
                  <button onClick={() => setClientStep('datetime')} className="primary-button dark-button">
                    Continuar <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </section>
          )}

          {clientStep === 'datetime' && (
            <section className="stack-space padded-section">
              <button onClick={() => setClientStep('catalog')} className="back-link">
                <ArrowLeft size={14} /> Volver a servicios
              </button>

              <div className="panel-card date-form">
                <h3>Seleccioná fecha y hora</h3>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="field-input"
                />
                <div className="time-grid">
                  {['09:00', '11:00', '14:00', '16:00'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`time-slot ${selectedTime === t ? 'active' : ''}`}
                    >
                      {t} hs
                    </button>
                  ))}
                </div>
                <button
                  disabled={!selectedTime}
                  onClick={() => setClientStep('form')}
                  className={`full-button ${selectedTime ? 'primary-button' : 'disabled-button'}`}
                >
                  Siguiente paso
                </button>
              </div>
            </section>
          )}

          {clientStep === 'form' && (
            <section className="stack-space padded-section">
              <button onClick={() => setClientStep('datetime')} className="back-link">
                <ArrowLeft size={14} /> Volver
              </button>

              <div className="panel-card form-card">
                <h3>Tus datos de contacto</h3>
                <input
                  type="text"
                  placeholder="Nombre y Apellido"
                  value={clientData.name}
                  onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                  className="field-input"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp / Celular"
                  value={clientData.phone}
                  onChange={(e) => setClientData({ ...clientData, phone: e.target.value })}
                  className="field-input"
                />
                <button onClick={handleConfirmBooking} className="primary-button full-button">
                  Confirmar reserva y ver seña
                </button>
              </div>
            </section>
          )}

          {clientStep === 'success' && (
            <section className="stack-space padded-section success-box">
              <CheckCircle2 size={48} className="success-icon" />
              <h2>¡Turno Pre-reservado!</h2>
              <p>
                Aboná la seña de $2.000 al Alias <strong>jassmine.nails.mp</strong> para confirmar tu lugar.
              </p>
              <button onClick={() => setClientStep('catalog')} className="primary-button full-button">
                Finalizar
              </button>
              <button onClick={handleCopyAlias} className="ghost-button full-button">
                {copiedAlias ? 'Alias copiado ✓' : 'Copiar alias'}
              </button>
            </section>
          )}

          {clientStep === 'my-bookings' && (
            <section className="stack-space padded-section">
              <div className="search-box">
                <h2>Buscar reserva por teléfono</h2>
                <form onSubmit={handleSearchBookings} className="search-form">
                  <input
                    type="tel"
                    placeholder="Ej: 1123456789"
                    value={searchPhone}
                    onChange={(e) => setSearchPhone(e.target.value)}
                    className="field-input"
                  />
                  <button type="submit" className="primary-button small-button">
                    <Search size={14} /> Buscar
                  </button>
                </form>
              </div>

              <div className="bookings-list">
                {(searchedBookings ?? bookings).map((booking) => (
                  <article key={booking.id} className="booking-summary">
                    <div className="booking-topline">
                      <strong>{booking.id}</strong>
                      <span className="tag soft-tag">{booking.status}</span>
                    </div>
                    <h3>{booking.clientName}</h3>
                    <p>{booking.serviceSummary}</p>
                    <div className="booking-meta">
                      <span>{booking.date}</span>
                      <span>{booking.time}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

import FeaturedAttorneys from '@/app/components/FeaturedAttorneys'
import HeroCarousel from '@/app/components/HeroCarrousel'
import ServiceDetails from '@/app/components/ServiceDetails'
import TestimonialsCarousel from '@/app/components/TestimonialsCarrousel'

export const metadata = {
    title: 'Derecho Familiar Integral | López Ziga y Asociados',
    description: 'Soluciones legales en divorcios, custodia y sucesiones. Enfoque humano y profesional en casos familiares.',
    keywords: ['abogados de familia', 'divorcio incausado', 'custodia de menores', 'sucesiones testamentarias'],
}

const slides = [
    {
        title: "Soluciones Legales para Familias",
        description: "Manejo sensible de casos de divorcio, custodia y pensión alimenticia. Protección de derechos familiares con enfoque humano.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/familiar-bg1.jpg",
        price: 6000,
    },
    {
        title: "Gestión de Sucesiones y Herencias",
        description: "Asesoría especializada en testamentos, sucesiones intestadas y división de bienes familiares. Más de 120 casos resueltos.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/familiar-bg2.jpg",
        price: 7000,
    },
    {
        title: "Protección de Menores",
        description: "Defensa legal especializada en custodia, patria potestad y régimen de convivencia. Respeto total al interés superior del menor.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/familiar-bg3.jpg",
        price: 6500,
    }
]

const serviceDetails = {
    title: "Derecho Familiar",
    description: "Brindamos acompañamiento legal especializado en materia familiar, priorizando soluciones pacíficas y protección de derechos fundamentales.",
    benefits: [
        "Divorcios voluntarios y contenciosos",
        "Acuerdos de custodia y convivencia",
        "Fijación de pensión alimenticia",
        "Juicios de patria potestad",
        "Sucesiones y testamentos",
        "Adopciones y reconocimientos",
        "Violencia intrafamiliar"
    ],
    process: [
        "Evaluación inicial confidencial",
        "Mediación y negociación",
        "Elaboración de acuerdos",
        "Representación en juicios",
        "Seguimiento post-sentencia"
    ]
}

const attorneys = [
    {
        name: "Dra. Laura Sánchez",
        title: "Especialista en Divorcios",
        experience: "9 años",
        cases: "180+",
        email: "l.sanchez@lopezziga.com",
        photo: "/images/lawyer2.jpg"
    },
    {
        name: "Lic. Diego Morales",
        title: "Experto en Sucesiones",
        experience: "7 años",
        cases: "95+",
        email: "d.morales@lopezziga.com",
        photo: "/images/lawyer1.jpg"
    }
]

export default function DerechoFamiliar() {
    return (
        <main className="min-h-screen mt-16 sm:mt-24 flex flex-col">
            <HeroCarousel slides={slides} service='Derecho Familiar' />
            <ServiceDetails {...serviceDetails} />
            <FeaturedAttorneys attorneys={attorneys} />
            <TestimonialsCarousel service="familiar" />
        </main>
    )
}
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import CTA from "@/components/sections/CTA";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((s) => s.slug === params.slug);
  
  if (!study) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: `${study.client} Case Study | Odoocrafts`,
    description: study.excerpt,
  };
}

// Simple custom markdown renderer for our predefined content
function renderMarkdown(content: string) {
  const lines = content.trim().split('\\n');
  const elements = [];
  let currentList = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // H3
    if (line.startsWith('### ')) {
      if (currentList.length > 0) {
        elements.push(<ul key={`ul-${i}`} className="list-disc pl-6 mb-8 text-white/70 space-y-2">{currentList}</ul>);
        currentList = [];
      }
      elements.push(<h3 key={i} className="text-2xl font-bold text-white mt-12 mb-6">{line.replace('### ', '')}</h3>);
    } 
    // H2
    else if (line.startsWith('## ')) {
      if (currentList.length > 0) {
        elements.push(<ul key={`ul-${i}`} className="list-disc pl-6 mb-8 text-white/70 space-y-2">{currentList}</ul>);
        currentList = [];
      }
      elements.push(<h2 key={i} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-16 mb-8">{line.replace('## ', '')}</h2>);
    }
    // Bullet point
    else if (line.startsWith('* ') || line.startsWith('- ')) {
      let text = line.substring(2);
      // bold replacement (very basic)
      const boldParts = text.split(/\\*\\*(.*?)\\*\\*/g);
      const formattedText = boldParts.map((part, idx) => 
        idx % 2 === 1 ? <strong key={idx} className="text-white font-semibold">{part}</strong> : part
      );
      currentList.push(<li key={i}>{formattedText}</li>);
    }
    // Paragraph
    else {
      if (currentList.length > 0) {
        elements.push(<ul key={`ul-${i}`} className="list-disc pl-6 mb-8 text-white/70 space-y-2">{currentList}</ul>);
        currentList = [];
      }
      
      const boldParts = line.split(/\\*\\*(.*?)\\*\\*/g);
      const formattedText = boldParts.map((part, idx) => 
        idx % 2 === 1 ? <strong key={idx} className="text-white font-semibold">{part}</strong> : part
      );
      
      elements.push(<p key={i} className="text-white/70 text-lg leading-relaxed mb-6">{formattedText}</p>);
    }
  }
  
  if (currentList.length > 0) {
    elements.push(<ul key="ul-final" className="list-disc pl-6 mb-8 text-white/70 space-y-2">{currentList}</ul>);
  }
  
  return elements;
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black pt-32">
      <article className="container mx-auto px-6 mb-20 max-w-4xl">
        <Link 
          href="/case-studies" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
        
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-white/50 mb-8">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {study.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {study.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-10 leading-[1.1]">
            {study.title}
          </h1>
          
          <div className="w-full h-80 md:h-[500px] rounded-3xl bg-white/5 border border-white/10 p-12 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black" />
             <img 
               src={study.coverImage} 
               alt={study.client}
               className="max-h-full max-w-full object-contain relative z-10 drop-shadow-2xl"
             />
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          {renderMarkdown(study.content)}
        </div>
      </article>
      
      <CTA />
    </main>
  );
}

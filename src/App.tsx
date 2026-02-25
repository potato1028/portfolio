/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight, 
  Home, 
  FolderOpen, 
  Wrench, 
  FileText, 
  MessageSquare,
  Youtube,
  Award,
  GraduationCap,
  X,
  MousePointerClick // 클릭 안내용 아이콘 추가
} from "lucide-react";
import { PROFILE, PROJECTS, SKILLS, EDUCATION, AWARDS, ACTIVITIES } from "./constants";

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-accent font-bold text-xl mb-6 tracking-wider uppercase border-l-4 border-accent pl-4">
    {children}
  </h2>
);

const NavIcon = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a 
    href={href} 
    className="p-3 text-text-secondary hover:text-white transition-all duration-300 hover:scale-110"
  >
    <Icon size={24} />
  </a>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen pb-20 relative">
      {/* Vertical Navigation (Left Side) */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 bg-card/90 backdrop-blur-lg border border-white/10 rounded-full px-3 py-8 flex flex-col items-center gap-6 shadow-2xl hidden lg:flex">
        <NavIcon icon={Home} href="#" />
        <NavIcon icon={FolderOpen} href="#projects" />
        <NavIcon icon={Wrench} href="#skills-tools" />
        <NavIcon icon={FileText} href="#education" />
        <NavIcon icon={MessageSquare} href="#contact" />
      </nav>

      <main className="section-container pt-12">
        {/* Profile Card */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card text-center space-y-4"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-accent/20">
              <img 
                src="/img/profilePic.jpeg"
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div>
            <p className="text-text-secondary text-base mb-2">@{PROFILE.name.toLowerCase()}_dev</p>
            <h1 className="text-4xl font-extrabold tracking-tight">{PROFILE.name}</h1>
            <p className="text-accent text-xl font-semibold mt-2">{PROFILE.role}</p>
          </div>

          <div className="flex justify-center gap-6">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-text-secondary hover:text-white transition-all hover:scale-110">
              <Mail size={24} />
            </a>
            <a href={PROFILE.youtube} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-all hover:scale-110">
              <Youtube size={24} />
            </a>
          </div>

          <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto">
            {PROFILE.bio}
          </p>
        </motion.section>

        {/* About Me Summaries */}
        <section className="space-y-3">
          {PROFILE.summaries.map((summary, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-4 flex items-start gap-3"
            >
              <div className="mt-1 text-accent">
                <ChevronRight size={20} />
              </div>
              <p className="text-base text-text-secondary">{summary}</p>
            </motion.div>
          ))}
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-8">
          <SectionHeader>Projects</SectionHeader>
          
          {/* ✨ 클릭 안내 문구 추가 */}
          <div className="flex items-center gap-2 text-text-secondary text-sm mb-6 pl-4 -mt-2 animate-pulse">
            <MousePointerClick size={16} className="text-accent" />
            <p>프로젝트 카드를 클릭하면 상세 내용을 크게 볼 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card card-hover group cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex gap-6 items-start relative z-10">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/5 flex-shrink-0">
                    <img 
                      src={`/img/${project.id}icon.png`} 
                      alt={project.title}
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-2xl group-hover:text-accent transition-colors">{project.title}</h3>
                      <div className="flex gap-3">
                        {project.links.github && (
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-text-secondary hover:text-white transition-colors">
                            <Github size={22} />
                          </a>
                        )}
                        {project.links.video && (
                          <a href={project.links.video} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-text-secondary hover:text-white transition-colors">
                            <ExternalLink size={22} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-accent text-sm font-semibold mb-3">{project.period}</p>
                    <p className="text-base text-text-secondary mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs px-3 py-1 bg-white/5 rounded-lg text-text-secondary border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Combined Skills & Tools Section */}
        <section id="skills-tools" className="pt-8">
          <SectionHeader>Skills & Tools</SectionHeader>
          <div className="space-y-8">
            {SKILLS.map((category, catIndex) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-base font-bold text-white/90 mb-4 flex items-center gap-3 px-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (catIndex * 0.1) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="glass-card p-6 flex items-center gap-4 card-hover"
                    >
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                        <img 
                          src={item.icon || `https://picsum.photos/seed/${item.name}/100/100`} 
                          alt={item.name} 
                          className="w-full h-full object-cover opacity-80"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white/90">{item.name}</h3>
                        {item.description && (
                          <p className="text-xs text-text-secondary mt-1">{item.description}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Extra Section */}
        <section id="education" className="pt-8">
          <SectionHeader>Education & Awards</SectionHeader>
          <div className="space-y-4">
            {EDUCATION.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card flex items-center gap-6"
              >
                <div className="p-4 bg-accent/10 rounded-2xl text-accent">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{edu.school} {edu.major}</h3>
                  <p className="text-sm text-text-secondary mt-1">{edu.period}</p>
                </div>
              </motion.div>
            ))}

            <div className="grid grid-cols-1 gap-4">
              {AWARDS.map((award, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card flex items-center justify-between py-6"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-3 bg-white/5 rounded-xl text-accent">
                      <Award size={24} />
                    </div>
                    <h3 className="text-base font-semibold">{award.title}</h3>
                  </div>
                  <span className="text-sm text-text-secondary">{award.date}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest px-4">Extra-Curricular</h4>
              {ACTIVITIES.map((activity, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 flex justify-between items-center"
                >
                  <span className="text-base text-white/90 font-medium">{activity.title}</span>
                  <span className="text-sm text-text-secondary">{activity.period}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="pt-12 pb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card bg-accent/10 border-accent/20 text-center py-12 space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold">Let's build something <br /> amazing together!</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a 
                href={`mailto:${PROFILE.email}`}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <div className="flex items-center justify-center gap-2 text-text-secondary text-sm">
                <Phone size={16} />
                {PROFILE.phone}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 space-y-4">
          <div className="text-accent font-bold text-xl tracking-tighter">
            {PROFILE.name.toUpperCase()}
          </div>
          <div className="flex justify-center gap-6 text-xs text-text-secondary">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills-tools" className="hover:text-white">Skills & Tools</a>
            <a href="#education" className="hover:text-white">Education</a>
          </div>
          <p className="text-[10px] text-text-secondary/50">
            © 2024 {PROFILE.name}. Built with React & Tailwind CSS.
          </p>
        </footer>
      </main>

      {/* 모달(Modal) 팝업 창 영역 */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            />

            {/* ✨ 팝업 크기를 max-w-6xl로 훨씬 더 키우고, 패딩(p-8)을 넉넉하게 주었습니다. */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card relative w-full max-w-6xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl border border-white/10 p-6 md:p-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col lg:flex-row gap-10 items-start mt-2">
                {/* 왼쪽: 이미지 영역을 더 크게 확보 */}
                <div className="w-full lg:w-96 h-64 lg:h-96 rounded-2xl overflow-hidden bg-white/5 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={`/img/${selectedProject.id}icon.png`}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain p-6"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* 오른쪽: 텍스트 영역 */}
                <div className="flex-1 w-full space-y-6">
                  <div>
                    <h3 className="font-extrabold text-4xl md:text-5xl mb-3 text-white">{selectedProject.title}</h3>
                    <p className="text-accent text-lg font-semibold">{selectedProject.period} · {selectedProject.team}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string) => (
                      <span key={t} className="text-sm px-4 py-1.5 bg-accent/10 rounded-lg text-accent border border-accent/20 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-xl text-white/90 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-8 pt-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3 flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                        주요 구현 내용
                      </h4>
                      <ul className="text-lg text-text-secondary space-y-3 list-disc list-inside">
                        {selectedProject.achievements.map((a: string, i: number) => (
                          <li key={i} className="leading-relaxed">{a}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-3 flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                        Troubleshooting
                      </h4>
                      <p className="text-lg text-text-secondary leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
                        {selectedProject.troubleshooting}
                      </p>
                    </div>

                    <div className="flex gap-4 pt-6">
                      {selectedProject.links.github && (
                        <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 bg-white/10 hover:bg-white/20 py-4 rounded-xl transition-colors text-white font-bold text-lg">
                          <Github size={24} /> GitHub 보기
                        </a>
                      )}
                      {selectedProject.links.video && (
                        <a href={selectedProject.links.video} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 bg-accent hover:bg-accent/90 py-4 rounded-xl transition-colors text-white font-bold text-lg">
                          <Youtube size={24} /> 시연 영상 보기
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal as TerminalIcon } from 'lucide-react';
import WindowFrame from './WindowFrame';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-10 md:pl-40 md:pr-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter italic italic-text">Establish_Link</h2>
          <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">// initializing_contact_protocol</p>
        </div>
        
        <WindowFrame title="contact_session.sh">
          <div className="font-mono text-sm">
            <div className="flex items-center gap-2 mb-10 text-gray-500">
              <span className="text-success">guest@jinesh:~$</span>
              <span className="text-text-main">sh send_message.sh</span>
            </div>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-10">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 group">
                  <label className="text-accent min-w-[100px] text-xs tracking-widest uppercase">/ name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter your name..."
                    className="flex-1 bg-transparent border-b border-border-color focus:border-accent outline-none py-2 transition-all placeholder:text-text-dim text-text-main"
                  />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 group">
                  <label className="text-accent min-w-[100px] text-xs tracking-widest uppercase">/ email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="your_email@domain.com"
                    className="flex-1 bg-transparent border-b border-border-color focus:border-accent outline-none py-2 transition-all placeholder:text-text-dim text-text-main"
                  />
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 group">
                  <label className="text-accent min-w-[100px] text-xs tracking-widest uppercase pt-2">/ message</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    placeholder="Describe your vision or project details..."
                    className="flex-1 bg-transparent border border-border-color focus:border-accent outline-none p-4 rounded transition-all placeholder:text-text-dim text-text-main resize-none"
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-6 flex justify-between items-center">
                <button 
                  type="submit"
                  className="group flex items-center gap-4 bg-accent text-white px-10 py-4 rounded font-mono text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                >
                  EXECUTE_SEND
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="hidden md:flex items-center gap-2 text-gray-700 text-[10px] tracking-widest uppercase">
                  <span className="terminal-cursor" />
                  WAITING_FOR_INPUT
                </div>
              </div>
            </form>
          </div>
        </WindowFrame>
      </div>
      
      {/* Decorative background logo */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.02] text-[20vw] font-bold select-none pointer-events-none uppercase tracking-tighter italic">
        CONTACT
      </div>
    </section>
  );
};

export default Contact;

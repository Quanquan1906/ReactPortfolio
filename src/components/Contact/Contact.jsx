import React from 'react';
import { Mail, Facebook, Github } from 'lucide-react';
export const Contact = () => {
  return (
    <section className="bg-[#19376D] text-white py-12 px-10" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="items-start">
          <h2 className="text-6xl font-bold mb-2">Contact</h2>
          <p className="text-xl text-white/80">Feel free to reach out!</p>
        </div>
        <div className="flex flex-col gap-4 md:ml-auto">
          <div className="flex items-center gap-3 ">
            <Mail className="w-5 h-5" />
            <span>doquan19062004@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Github className="w-5 h-5" />
            <span>Quanquan1906</span>
          </div>
          <div className="flex items-center gap-3">
            <Facebook className="w-5 h-5" />
            <span>Đỗ Quân</span>
          </div>
        </div>
      </div>
    </section>
  );
};

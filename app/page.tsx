'use client';

import { NameTransition } from './components/NameTransition';

export default function Home() {
  return (
    <section>
      <NameTransition />
    
      <p className="mt-6 text-lg">
      I’m a student of political science and computer science with a growing interest in revolutionary theory, political Islam, and conflict studies. My work spans from building software to exploring ideas around state power, resistance, and identity — including emerging areas like cyber ethics.
      </p>



      <h2 className="text-xl font-semibold mt-10">📝 Writing</h2>
      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li><a href="/n/revolution" className="text-blue-500 hover:underline">On Political Revolution</a></li>
        <li><a href="/n/conflict" className="text-blue-500 hover:underline">Conflict Studies & Resistance</a></li>
        <li><a href="/n/ethics" className="text-blue-500 hover:underline">Cyber Ethics & Islamic Thought</a></li>
        <li><a href="/n/islam" className="text-blue-500 hover:underline">What is Political Islam?</a></li>
        <li><a href="/n/future" className="text-blue-500 hover:underline">The Future of Political Order</a></li>
      </ul>

      <h2 className="text-xl font-semibold mt-10">💻 Code Projects</h2>
      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li><a href="https://github.com/Shehanshah1/MadinaEnterprises" className="text-blue-500 hover:underline" target="_blank">Madina Enterprises Full-Stack System</a></li>
        <li><a href="https://github.com/Shehanshah1/CryptoPals-Challenge-App" className="text-blue-500 hover:underline" target="_blank">CryptoPals Challenge Suite</a></li>
        <li><a href="https://github.com/Shehanshah1" className="text-blue-500 hover:underline" target="_blank">See More on GitHub</a></li>
      </ul>
  
    </section>
  );
}

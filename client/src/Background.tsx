export function Background() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Light mode gradient orbs */}
      <div className="absolute top-0 -left-44 w-[500px] h-[500px] bg-gradient-to-br from-pink-400 to-rose-600 opacity-20 dark:opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -top-44 left-64 w-[600px] h-[600px] bg-gradient-to-br from-purple-400 to-indigo-600 opacity-15 dark:opacity-8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-16 -right-44 w-[550px] h-[550px] bg-gradient-to-br from-blue-400 to-cyan-600 opacity-18 dark:opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-yellow-300 to-orange-400 opacity-10 dark:opacity-5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-green-300 to-emerald-500 opacity-12 dark:opacity-6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Dark mode specific elements */}
      <div className="absolute hidden dark:block top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 to-blue-600 opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute hidden dark:block bottom-1/3 left-1/5 w-[300px] h-[300px] bg-gradient-to-br from-indigo-600 to-purple-600 opacity-4 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4.5s'}}></div>
      
      {/* Small floating dots */}
      <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-pink-400 dark:bg-purple-500 rounded-full opacity-30 dark:opacity-20 animate-bounce" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-purple-400 dark:bg-blue-500 rounded-full opacity-25 dark:opacity-15 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 right-1/4 w-5 h-5 bg-blue-400 dark:bg-cyan-500 rounded-full opacity-20 dark:opacity-12 animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-400 dark:bg-yellow-500 rounded-full opacity-35 dark:opacity-20 animate-bounce" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-1/2 right-1/2 w-3 h-3 bg-green-400 dark:bg-green-500 rounded-full opacity-30 dark:opacity-18 animate-bounce" style={{animationDelay: '4s'}}></div>
      
      {/* Gradient mesh overlay - different for light and dark modes */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 dark:via-gray-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-pink-50/10 dark:via-purple-900/5 to-transparent pointer-events-none"></div>
      
      {/* Dark mode specific overlay to prevent harsh contrasts */}
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-transparent via-gray-900/5 to-gray-900/10 pointer-events-none"></div>
    </div>
  );
}
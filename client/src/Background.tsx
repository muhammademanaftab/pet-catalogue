export function Background() {
  return (
    <div className="z-0 absolute w-full h-full overflow-hidden min-h-screen pointer-events-none">
      {/* Main gradient orbs */}
      <div className="absolute top-0 -left-44 w-[500px] h-[500px] bg-gradient-to-br from-pink-400 to-rose-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -top-44 left-64 w-[600px] h-[600px] bg-gradient-to-br from-purple-400 to-indigo-600 opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-16 -right-44 w-[550px] h-[550px] bg-gradient-to-br from-blue-400 to-cyan-600 opacity-18 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-yellow-300 to-orange-400 opacity-10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-green-300 to-emerald-500 opacity-12 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Small floating dots */}
      <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-pink-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 right-1/4 w-5 h-5 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-35 animate-bounce" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-1/2 right-1/2 w-3 h-3 bg-green-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '4s'}}></div>
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-pink-50/10 to-transparent pointer-events-none"></div>
    </div>
  );
}
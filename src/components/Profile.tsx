
import Image from "next/image";
import profile from "../../public/images/profile.jpeg";

const Profile = () => {
  return (

    <div className="flex items-center gap-5 mb-6">
          <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-2 ring-teal-accent/80 shadow-[0_0_20px_rgba(100,255,218,0.35)] overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:ring-teal-accent group-hover:shadow-[0_0_30px_rgba(100,255,218,0.5)]">
                  <Image
                      src={profile}
                      alt="Arafat Nill - Full Stack Developer"
                      className="w-full h-full object-cover"
                      width={112}
                      height={112}
                  />
              </div>

              <span className="absolute bottom-1 right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span
                      className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 ring-2 ring-navy-900"
                      title="Available for hire"
                  ></span>
              </span>
          </div>

          <div className="sm:hidden">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-400/10 text-teal-accent border border-teal-400/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 text-white"></span> Available for work
            </span>
          </div>
        </div>

    
  );
};

export default Profile;

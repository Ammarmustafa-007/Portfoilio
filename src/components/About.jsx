import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
             Passionate Web Developer | Tech Creator | Entrepreneurship Enthusiast
            </h3>
<br />
            <p className="text-muted-foreground text-lg font-serif italic">
            ✨I’m a passionate web developer skilled in building responsive and user-friendly web applications using modern technologies like JavaScript, React, Tailwind CSS, and the MERN stack.
            </p>
<br />
            <p className="text-muted-foreground text-lg font-serif italic">
            ✨I enjoy solving problems, learning new tools, and continuously improving my skills to grow as a developer and create impactful digital experiences
            </p>
<br />
              <p className="text-muted-foreground text-lg font-serif italic ">
✨I’m an entrepreneurship enthusiast with experience in building digital solutions, developing business strategies, and acquiring clients through effective communication and value-driven services.            </p>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center mr-8">
              <a href="https://wa.me/923306381984" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Ammarcv.pdf"
                download="Ammar-Mustafa-CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Briefcase className="h-6 w-6 text-primary" />
    </div>
    <div className="text-left">
      <h4 className="font-semibold text-lg">Entrepreneurship</h4>
      <p className="text-muted-foreground">
        Driving business growth with entrepreneurial strategies, client 
        acquisition, and value-driven solutions.
      </p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};
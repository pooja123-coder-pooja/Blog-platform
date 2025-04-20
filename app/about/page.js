export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">About Me</h1>
          <p className="text-gray-600 dark:text-gray-50 text-lg mb-4 text-center">
            Hi there! I&apos;m just a tech enthusiast — a curious mind who loves exploring the world of software development.
            Whether it&apos;s building web apps, learning new frameworks, or sharing knowledge, I&apos;m always excited
            about what tech has to offer.
          </p>
          <p className="text-gray-600 dark:text-gray-50 text-lg text-center">
            This blog is my digital space where I write about my learnings, ideas, and challenges I&apos;ve faced along
            the way. If you love coding and continuous growth, you&apos;re in the right place.
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">My Developer Journey</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              Here&apos;s a quick look at the milestones that shaped my path in tech.
            </p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Curiosity to Code</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-50">
                My journey began with curiosity — wondering how websites worked. That curiosity turned into action
                when I wrote my first lines of code and got hooked instantly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Learning the Craft</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-50">
                From watching tutorials to building mini projects, I dove deeper into the world of JavaScript,
                React, and backend technologies. Every bug was a lesson; every fix, a victory.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Building &amp; Growing</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-50">
                As my confidence grew, I started working on real-world applications, collaborating with peers,
                and even mentoring beginners. Coding became more than a skill — it became a passion.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Looking Ahead</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-50">
                I&apos;m still learning, building, and evolving every day. With so much more to explore, I&apos;m excited
                about what lies ahead in this ever-changing tech landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

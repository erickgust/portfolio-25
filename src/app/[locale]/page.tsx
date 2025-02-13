import { EmailButton } from '@/components/EmailButton'
import { GitHubButton } from '@/components/GithubButton'
import { HorizontalLine } from '@/components/HorizontalLine'
import { Project } from '@/components/Project'
import { ProjectLink } from '@/components/ProjectLink'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { TechTag } from '@/components/TechTag'
import { VerticalLine } from '@/components/VerticalLine'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Image from 'next/image'

type HomeProps = {
  params: Promise<{
    locale: string
  }>
}

export default async function Home({ params }: HomeProps) {
  setRequestLocale((await params).locale)
  const t = await getTranslations('home')

  return (
    <div className='overflow-x-hidden px-11'>
      <header className='relative mx-auto flex max-w-screen-lg items-center justify-between py-16 text-[#DCD7CD] sm:py-8'>
        <VerticalLine side='left' origin='top' />
        <VerticalLine side='right' origin='top' />

        <strong className='text-base font-normal sm:text-sm'>
          Erick Gustavo
        </strong>

        <div className='hidden items-center gap-4 text-sm sm:flex'>
          <GitHubButton />
          <EmailButton />
        </div>
      </header>

      <main className='relative mx-auto max-w-screen-lg'>
        <span
          aria-hidden
          className='absolute left-0 top-0 block h-full w-px bg-white opacity-0'
        />
        <VerticalLine side='left' />
        <VerticalLine side='right' />

        <section className='grid min-h-[calc(100svh-152px)] place-items-end sm:min-h-[calc(100vh-90px)] sm:place-items-center'>
          <h1 className='text-balance bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text py-16 text-3.5xl text-transparent sm:text-5.5xl'>
            {t('hero.headline')}
          </h1>
        </section>

        <section className='mb-24 mt-4 flex items-center justify-between gap-4 sm:hidden'>
          <EmailButton />
          <GitHubButton />
        </section>

        <section className='relative flex flex-col justify-between gap-12 md:flex-row md:flex-wrap'>
          <HorizontalLine side='top' start='right' />
          <HorizontalLine side='bottom' start='left' />

          <article className='flex grow basis-80 flex-col justify-between rounded border border-[#DCD7CD] border-opacity-30 bg-[#161616] bg-opacity-90 p-8 max-md:max-h-60 md:h-72 xl:grow-0'>
            <Image
              aria-hidden
              src='/dev.svg'
              alt={t('services.development.iconAlt')}
              width={32}
              height={32}
              className='size-8'
            />

            <div>
              <strong className='mb-4 inline-block text-1.5xl font-bold sm:text-2xl'>
                {t('services.development.title')}
              </strong>
              <p className='text-sm sm:text-base'>
                {t('services.development.description')}
              </p>
            </div>
          </article>
          <article className='flex grow basis-80 flex-col justify-between rounded border border-[#DCD7CD] border-opacity-30 bg-[#161616] bg-opacity-90 p-8 max-md:max-h-60 md:h-72 xl:grow-0'>
            <Image
              aria-hidden
              src='/app.svg'
              alt={t('services.webAndMobile.iconAlt')}
              width={32}
              height={32}
              className='size-8'
            />

            <div>
              <strong className='mb-4 inline-block text-1.5xl font-bold sm:text-2xl'>
                {t('services.webAndMobile.title')}
              </strong>
              <p className='text-sm sm:text-base'>
                {t('services.webAndMobile.description')}
              </p>
            </div>
          </article>
          <article className='flex grow basis-80 flex-col justify-between rounded border border-[#DCD7CD] border-opacity-30 bg-[#161616] bg-opacity-90 p-8 max-md:max-h-60 md:h-72 xl:grow-0'>
            <Image
              aria-hidden
              src='/tools.svg'
              alt={t('services.design.iconAlt')}
              width={32}
              height={32}
              className='size-8'
            />

            <div>
              <strong className='mb-4 inline-block text-1.5xl font-bold sm:text-2xl'>
                {t('services.design.title')}
              </strong>
              <p className='text-sm sm:text-base'>
                {t('services.design.description')}
              </p>
            </div>
          </article>
        </section>

        <section className='relative space-y-36 py-40 sm:space-y-44'>
          <Project
            title='QSMP.co'
            image={
              <ResponsiveImage
                desktop={{
                  src: '/qsmp.co-desktop.png',
                  alt: 'QSMP.co website',
                  width: 3189,
                  height: 1224,
                  quality: 100,
                }}
                mobile={{
                  src: '/qsmp.co-mobile.png',
                  width: 1356,
                  height: 792,
                  quality: 100,
                }}
              />
            }
            tags={
              <>
                <TechTag
                  color='#8AD3C8'
                  title='Tailwind'
                  img={{
                    src: '/techs/tailwind.svg',
                    alt: 'Tailwind CSS icon',
                  }}
                />
                <TechTag
                  color='#72B5FF'
                  title='TypeScript'
                  img={{
                    src: '/techs/typescript.svg',
                    alt: 'TypeScript icon',
                  }}
                />
                <TechTag
                  color='#FFF'
                  title='Next.js'
                  img={{ src: '/techs/nextjs.svg', alt: 'Next.js icon' }}
                />
              </>
            }
            leftContent={
              <>
                <p>{t('projects.qsmp.descriptionPart1')}</p>
                <p>{t('projects.qsmp.descriptionPart2')}</p>
              </>
            }
            rightContent={
              <>
                <p>{t('projects.qsmp.descriptionPart3')}</p>
                <p>{t('projects.qsmp.descriptionPart4')}</p>
              </>
            }
            actions={
              <>
                <ProjectLink type='live' href='http://qsmpco.netlify.app/'>
                  {t('actions.seeLive')}
                </ProjectLink>

                <ProjectLink
                  type='github'
                  href='https://github.com/erickgust/qsmp.co'
                >
                  {t('actions.github')}
                </ProjectLink>
              </>
            }
          />

          <Project
            image={
              <ResponsiveImage
                desktop={{
                  src: '/mycontacts-desktop.png',
                  alt: 'MyContacts project',
                  width: 3189,
                  height: 1224,
                  quality: 100,
                }}
                mobile={{
                  src: '/mycontacts-mobile.png',
                  width: 1356,
                  height: 792,
                  quality: 100,
                }}
              />
            }
            title='MyContacts'
            leftContent={<p>{t('projects.myContacts.descriptionPart1')}</p>}
            rightContent={<p>{t('projects.myContacts.descriptionPart2')}</p>}
            actions={
              <ProjectLink
                type='github'
                href='https://github.com/erickgust/my-contacts-front'
              >
                {t('actions.github')}
              </ProjectLink>
            }
            tags={
              <>
                <TechTag
                  color='#88E6FF'
                  title='React.js'
                  img={{ src: '/techs/react.svg', alt: 'React icon' }}
                />
                <TechTag
                  color='#A6C6E0'
                  title='PostgreSQL'
                  img={{ src: '/techs/postgresql.svg', alt: 'PostgreSQL icon' }}
                />
                <TechTag
                  color='#72B5FF'
                  title='TypeScript'
                  img={{ src: '/techs/typescript.svg', alt: 'TypeScript icon' }}
                />
                <TechTag
                  color='#B0F45E'
                  title='Node.js'
                  img={{ src: '/techs/node.svg', alt: 'Node.js icon' }}
                />
              </>
            }
          />
          <Project
            image={
              <ResponsiveImage
                desktop={{
                  src: '/tmdb-desktop.png',
                  alt: 'TMDB Movies website',
                  width: 3189,
                  height: 1224,
                  quality: 100,
                }}
                mobile={{
                  src: '/tmdb-mobile.png',
                  width: 1356,
                  height: 792,
                  quality: 100,
                }}
              />
            }
            title='TMDB Movies'
            leftContent={<p>{t('projects.tmdb.descriptionPart1')}</p>}
            rightContent={<p>{t('projects.tmdb.descriptionPart2')}</p>}
            actions={
              <>
                <ProjectLink
                  type='live'
                  href='https://erickgust-tmdb.netlify.app/'
                >
                  {t('actions.seeLive')}
                </ProjectLink>
                <ProjectLink
                  type='github'
                  href='https://github.com/erickgust/promobit-tmdb'
                >
                  {t('actions.github')}
                </ProjectLink>
              </>
            }
            tags={
              <>
                <TechTag
                  color='#88E6FF'
                  title='React.js'
                  img={{ src: '/techs/react.svg', alt: 'React icon' }}
                />
                <TechTag
                  color='#72B5FF'
                  title='TypeScript'
                  img={{ src: '/techs/typescript.svg', alt: 'TypeScript icon' }}
                />
                <TechTag
                  color='#8AD3C8'
                  title='Tailwind'
                  img={{ src: '/techs/tailwind.svg', alt: 'Tailwind CSS icon' }}
                />
              </>
            }
          />
        </section>

        <section className='relative py-12'>
          <HorizontalLine side='top' start='right' />
          <HorizontalLine side='bottom' start='left' />
          <div className='space-y-12 sm:space-y-16'>
            <article>
              <div className='flex flex-col gap-2'>
                <strong className='text-balance text-2.5xl font-semibold leading-[1.75rem] text-[#DCD7CD]'>
                  <span className='mr-3'>{t('experience.quackity.title')}</span>
                  <Image
                    aria-hidden
                    src='/quackity.svg'
                    alt='Quackity Studios logo'
                    width={26}
                    height={26}
                    className='mb-0.5 mr-2 inline-block rotate-[4deg] rounded'
                  />
                  <span>Quackity Studios</span>
                </strong>

                <i className='text-lg font-normal not-italic text-[#DCD7CD] sm:text-xl'>
                  {t('experience.quackity.period')}
                </i>
              </div>

              <div className='max-w-prose'>
                <p className='mt-4 text-sm leading-[1.5rem] sm:text-base'>
                  {t('experience.quackity.description')}
                </p>
              </div>
            </article>

            <article>
              <div className='flex flex-col gap-2'>
                <strong className='text-balance text-2.5xl font-semibold leading-[1.75rem] text-[#DCD7CD]'>
                  <span className='mr-3'>{t('experience.upbase.title')}</span>
                  <Image
                    aria-hidden
                    src='/upbase.svg'
                    alt='UpBase Consultoria logo'
                    width={26}
                    height={26}
                    className='mb-0.5 mr-2 inline-block rotate-[4deg] rounded'
                  />
                  <span>UpBase Consultoria</span>
                </strong>

                <i className='text-lg font-normal not-italic text-[#DCD7CD] sm:text-xl'>
                  {t('experience.upbase.period')}
                </i>
              </div>

              <div className='max-w-prose'>
                <p className='mt-4 text-sm leading-[1.5rem] sm:text-base'>
                  {t('experience.upbase.description')}
                </p>
              </div>
            </article>

            <article>
              <div className='flex flex-col gap-2'>
                <strong className='text-balance text-2.5xl font-semibold leading-[1.75rem] text-[#DCD7CD]'>
                  <span className='mr-3'>
                    {t('experience.education.title')}
                  </span>
                  <Image
                    aria-hidden
                    src='/unicesumar.svg'
                    alt='Universidade Cesumar logo'
                    width={26}
                    height={26}
                    className='mb-0.5 mr-2 inline-block rotate-[4deg] rounded'
                  />
                  <span>Universidade Cesumar</span>
                </strong>

                <i className='text-lg font-normal not-italic text-[#DCD7CD] sm:text-xl'>
                  {t('experience.education.period')}
                </i>
              </div>

              <div className='max-w-prose'>
                <p className='mt-4 text-sm leading-[1.5rem] sm:text-base'>
                  {t('experience.education.description')}
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className='relative mx-auto max-w-screen-lg'>
        <VerticalLine side='left' origin='bottom' />
        <VerticalLine side='right' origin='bottom' />

        <div className='flex flex-col items-center justify-center gap-1 overflow-hidden py-64 text-[#DCD7CD] sm:gap-2 sm:py-48'>
          <p className='text-base sm:text-2xl'>{t('footer.letWork')}</p>
          <div className='footer-container group relative px-8 py-2'>
            <span
              aria-hidden
              className='absolute left-1/2 top-0 -z-10 block h-px w-screen -translate-x-1/2 -translate-y-96 bg-white opacity-5 transition-transform duration-300 group-hover:-translate-y-0'
            />

            <span
              aria-hidden
              className='absolute bottom-0 left-1/2 -z-10 block h-px w-screen -translate-x-1/2 translate-y-96 bg-white opacity-5 transition-transform duration-300 group-hover:translate-y-0'
            />

            <span
              aria-hidden
              className='absolute left-0 top-0 -z-10 block h-screen w-px -translate-x-[80vw] -translate-y-1/2 bg-white opacity-5 transition-transform duration-300 group-hover:translate-x-0'
            />

            <span
              aria-hidden
              className='absolute right-0 top-0 -z-10 block h-screen w-px -translate-y-1/2 translate-x-[80vw] bg-white opacity-5 transition-transform duration-300 group-hover:translate-x-0'
            />

            <p className='bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text text-2.5xl text-transparent hover:cursor-pointer sm:text-5.5xl'>
              erick.prussak@gmail.com
            </p>
          </div>
        </div>

        <div className='group relative flex items-center justify-center gap-1.5 p-8 text-xs lowercase leading-none text-[#57544E]'>
          <HorizontalLine side='top' start='right' isLastElement />

          <span className='pt-0.5'>{t('footer.developedBy')}</span>
          <Image
            aria-hidden
            src='/star.svg'
            alt='Star icon as a separator'
            width={14}
            height={14}
            className='size-3.5 transition-transform duration-300 group-hover:rotate-90'
          />
          <span className='pt-0.5'>
            {t('footer.designedBy')}{' '}
            <a
              href='https://maelle.works'
              rel='noopener noreferrer'
              target='_blank'
            >
              Maëlle
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

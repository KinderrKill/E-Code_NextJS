import GlitchedTitle from './glitchedTitle';

type ComponentProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function SectionHeader(props: ComponentProps) {
  return (
    <section
      className='lg:w-screen xl:w-1/2 container mx-auto z-10 flex flex-col items-center text-center y-10
    after:w-1/3 after:h-1 after:bg-ecRed after:mt-10 after:rounded-md after:z-10'>
      <GlitchedTitle id={props.id} value={props.title} />
      <p className='px-3 font-primary z-10 text-lg'>{props.children}</p>
    </section>
  );
}

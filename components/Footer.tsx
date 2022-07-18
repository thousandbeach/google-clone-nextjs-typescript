export default function Footer() {
  return (
    <footer className='absolute bottom-0 left-[50%] p-6 text-sm text-gray-600 whitespace-nowrap translate-x-[-50%]'>
      <p>Copyright &copy; {new Date().getFullYear()} Takahisa Fujiwara</p>
    </footer>
  );
}

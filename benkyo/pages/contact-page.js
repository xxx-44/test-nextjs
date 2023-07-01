import Image from 'next/image';
import Layout from '../components/layout';

const Contact = () => {
	return (
		<Layout title='Contact'>
			<div className='bg-white text-center shadow-xl p-8 w-80 rounded'>
				<div className='mt-4'>
					<p className='font-bold'>Contact Info</p>
				</div>
				<div className=' flex justify-center mt-4'>
					<Image className=' rounded-full' src='/avater.png' width={60} height={60} alt='Avatar' />
				</div>
				<div className='mt-4'>
					<p className='font-bold'>Adress</p>
					<p className='text-xs mt-1 text-gray-600'>city A</p>
					<p className='font-bold mt-4'>E-mail</p>
					<p className='text-xs mt-1 text-gray-600'>abc@mail.com</p>
					<p className='font-bold mt-4'>Phone</p>
					<p className='text-xs mt-1 text-gray-600'>000-0000-0000</p>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;

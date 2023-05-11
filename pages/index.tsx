import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "rgb(89, 91, 92)",
      }}
    >
      Welcome
    </div>
  );
}

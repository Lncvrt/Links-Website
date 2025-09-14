import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFolderOpen,
  faHouse,
  faQuestion
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faJenkins } from '@fortawesome/free-brands-svg-icons'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Lncvrt's Websites & Links"
}

export default function Home () {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='center-box'>
        <h1 className='text-center'>Lncvrt&apos;s Websites & Links</h1>
        <p className='text-center mb-6'>
          Some of my websites & socials can be found here
        </p>
        <div className='button-container'>
          <Link
            href='https://ci.lncvrt.xyz/'
            target='_blank'
            rel='noopener noreferrer'
            className='button'
          >
            <FontAwesomeIcon
              icon={faJenkins}
              width={24}
              height={24}
              className='button-icon'
            />
            Jenkins
          </Link>
          <Link
            href='https://repo.lncvrt.xyz/#/'
            target='_blank'
            rel='noopener noreferrer'
            className='button'
          >
            <FontAwesomeIcon
              icon={faFolderOpen}
              width={24}
              height={24}
              className='button-icon'
            />
            Maven Repository
          </Link>
          <Link
            href='https://lncvrt.xyz/'
            target='_blank'
            rel='noopener noreferrer'
            className='button'
          >
            <FontAwesomeIcon
              icon={faHouse}
              width={24}
              height={24}
              className='button-icon'
            />
            Main Website
          </Link>
          <Link
            href='https://github.com/Lncvrt'
            target='_blank'
            rel='noopener noreferrer'
            className='button'
          >
            <FontAwesomeIcon
              icon={faGithub}
              width={24}
              height={24}
              className='button-icon'
            />
            GitHub
          </Link>
          <Link
            href='https://lncvrt.xyz/contacts'
            target='_blank'
            rel='noopener noreferrer'
            className='button'
          >
            <FontAwesomeIcon
              icon={faQuestion}
              width={24}
              height={24}
              className='button-icon'
            />
            Other Socials
          </Link>
          <Link
            href='https://berrydash.lncvrt.xyz/'
            target='_blank'
            rel='noopener noreferrer'
            className='button'
          >
            <Image
              src='https://raw.githubusercontent.com/BerryDash/source/refs/heads/dev/Assets/Resources/Icon.png'
              width={24}
              height={24}
              alt=''
              unoptimized={true}
              className='button-icon'
            />
            Berry Dash
          </Link>
          <Link
            href='https://triangles.lncvrt.xyz/'
            target='_blank'
            rel='noopener noreferrer'
            className='button'
          >
            <Image
              src='https://triangles.lncvrt.xyz/favicon.png'
              width={24}
              height={24}
              alt=''
              unoptimized={true}
              className='button-icon'
            />
            Triangles
          </Link>
        </div>
      </div>
    </div>
  )
}

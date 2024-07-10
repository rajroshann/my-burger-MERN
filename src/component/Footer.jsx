'use client';
import aus_logo from './../assets/aus_logo.png'
import { Footer } from 'flowbite-react';
import b2 from './../assets/a3.png'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter,BsLinkedin } from 'react-icons/bs';

export default function Footerr() {
  return (
   <div >
     <Footer container className='bg-slate-950'>
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
            className='text-white'
              alt="Flowbite Logo"
              href="#"
              name=" MY  BUrGeRrr"
              src={b2}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Order" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                 Burger
                </Footer.Link>
                <Footer.Link href="#">
                 Other Food 
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  LinkedIn
                </Footer.Link>
                <Footer.Link href="#">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="SOT Silchar™"
            href="#"
            year={2019}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
          </div>
        </div>
      </div>
    </Footer>
   </div>
  )
}



import SignIn from '../components/SignIn'
import AuthenticatedIntro from '../components/AuthenticatedIntro'
import Footer from '../components/Footer'
import {SignInWrapper} from '../components/Styles';


export default function Algorand() {

  const AuthedState = () => {
    return (
      <SignInWrapper
        style={{  background: '#000'}}
        >
        <AuthenticatedIntro />
        <Footer />
    </SignInWrapper>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-100">
    {address ? (
        <div>
        <AuthedState />
        </div>

    ) : (
      <SignIn />
    )}
  </div>
  )
}

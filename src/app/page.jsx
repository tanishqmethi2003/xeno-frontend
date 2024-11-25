'use client';

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../utils/firebase";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const signInWithGoogle = async () => {
    try {
      await googleProvider();
      router.push("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8 text-center">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            src="data:image/jpeg;base64,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" // Replace with your logo path
            alt="XENO Logo"
            className="h-16"
          />
        </div>

        {/* Welcome Section */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Welcome to XENO
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Your gateway to streamlined customer relationship management with AI-powered tools and insights.
        </p>

        {/* Features Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vuAmMbwzNa0PpKo1v08_nci5dxToXfyw7A&s" // Replace with relevant image
              alt="CRM Management"
              className="h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              One-Stop CRM Solution
            </h3>
            <p className="text-gray-600 text-sm">
              Manage and analyze your customer relationships effortlessly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMSFRIXGRgVGBgXFRcWGBUYFRUXFxcYGhUYHSggGBolGxUYITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGxAQGzImICYvMC01LzIvLSs1Mi4wLS0tLTU3NS0wLSswLy0tLTgtKy0wLy0tLy0uLTUtKy0tLS8tLf/AABEIALQBGAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABEEAACAQIDBQUEBQkHBQEAAAAAAQIDEQQSIQUGMUFRE2FxgZEiMqGxB0JSgsEjYnKSosLR4fAUM2NzdLLxJCVTg9IV/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EADERAQACAQIDBQcFAAMBAAAAAAABAgMEERIhMQVBUXHwE2GRobHR4SIjMoHBFELxM//aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFMqiXFpeLMbwzETPRUZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEG3q3wak6OGdraSqcdeah/wDXp1OPrO0JiZpi+P2dvQ9mxMRky/1H3+yGOnKbcpNtvjKV235vVnEtfed55y7laxEbRyhvdibfr4e0U3Up/Ym+H6MuMfiu4taftDLh5dY8FXU9nYc/PpPjH++Prm6DsjakMRDPC/SUXxi+j/iei0+ppnpxVea1Omvp78Nvj4s4nVwAAAAY1WvZ6cOYGQnzAsxxHtW5AXwAAAAAAAAAAAAAAAAAAAAAAAABF9+ttujSVKDtVqJ6rjGHBvub4Lz6HO7R1Ps6cFes/R0+zNL7W/HbpHzlzvC0Mz4afN9Dzsz3Q9In2yN2acIdpibdcrdow/SfN93DxOzpezaUr7TP8O6PP1s4Wq7Sve3Bg+PfPl63bOWy8HXg1CNK3DNSypxfjH5MtzpdJnpMUiPOu3+KcarVYLb2mfK2/wDqP7BzYbG9jJ6S9h9HdZoS/r7TOXo+LTav2Vu/l/sT68XV1nDqdJ7Svdz/AMmPXgnZ6N5wAAAAFupST8QLdKLi7cU+YFypST8QKoJ8wKgAAAAAAAAAAAAAAAAAAAAAAADju3No/wBpxE6id03lh+itI+F+Pi2eV1WX2uWbfDyev0uKMOGK/Hz70n3T2bCCeIqe5STtf7SV3Lvty733Fjs7DXedRk6V9fL6+Sh2jntO2DH1t9Pz9FNSniMfNySUaUXaOZ2jH096duP4Gtq5+0L7xyrHj0j7ykrbBoKRE87T4dZ+0MalTq4LEQc7JaXad4zg3aXp38GkRVrk0Woji/Ex3/BLa2PW4J4fzE9zbb0U8uLw81xbiv1Kia/3F3tGvDqcVvHb5TH3UezrcWmyU8/nH4TA7jiAAAAA12M29hKU3Tq4mhTnFJuM6sINJ8HaTWneGdple2dtShXTlQrUqqTs3TnGaT6PK9GCYmOrLDAAAAAAAAAAAAAAAAAAAAAAAAAajezGdlg601o8uVdzm1BP1lcr6q/BhtPuWdHj481Y9/05uTbIp3qX5RTf4L5/A8tknar1Loe2KTjRoYSPvTazeN1x7szv906mrpOPDi0tes9fXnO/9ONpbxbLk1NukdPXl9Uf3732ns6VPCYKnSlOMVKpKom4xT1UVGLTzv3m76JrjfTv6bTUpSKx0hycuW2S83t1luN5K6xGGwteMbdpFTS5pVacZW+KOJ23T9NY795j5Or2Pfa9vDaGdvBTzYnDR5ppvwzxv/tY7Qji1OGseucfZrobcOny29dJ+6TnZckAAAAHC99t0HHETlhM1SE3UqOLa9izTlabeqcpuy46c9WRccbr/sLcMT7mH9FmLqQ2lRVPhUU4TXWGRz8rOCd+7vN4V7/xfQBsgAAAAAAAAAAAAAAAAAAAAAAAACJ/SXVthEvtVIR9FKX7pQ7Stth28Zj7uj2XG+bfwiUM3So5qsV1qQXknd/M4NK8WalffH1dzPbhxWt7p+ib4md9o00+UdP1Jy/E6eWd+0qb90f5aXIxxt2faY75/wBiHOd7d1MfitrVKcaU1RqSjLt8v5ONPJFSefg5xs0ocW0uTuejpetabuQ6Ji6cZ4mhh4L2KKV+5RSdvSMV5nndVPt9ZTFH/XnP1+0f262nj2OlvknrblH0+/wXcK+1x8pfVpK3mvZt6yl6DH+92hNu6kbf59Zn4F49loojvt/79IhJTsuUAafFbVdKUoP2no4u1uOuVrw5ruIpvwzsv49LGWsXjk2dDEwmrxkn56+a5EkWieinfHen8oXTLRA99MA5U6tOFenCc/dtOzWuZxaWqi1dO1+JBNZid+51ceWMmP2e+07NX9GezsHhKku2xWGljp3hGnGrG9OF72Sdm5Ssm9OFkubcvSvFPKFLJS02mkc9vD13OoGyuAAAAAAAAAAAAAAAAAAAAAAAAES+k6m3g8y+pUhJ+eaH75R7QrxYfKYdDs23Dm84n7ofuZWSqU3/AIsV65V+JwsU8GopM+MfXZ288cWC/lP0Snelyo4mnXj0TXRuF016Nepb7S4sOprmr626/JS7OiubTWxT636fNexW96cPycJKb5ytaPere98CTL2xHB+is7+/bb8/JHj7ImL/AK7cvd65fN7gYPC4eeIq/wB9U91Pjd6pPvb9p+HcZw1nR4LZ8n87evzP4YzTGrz1w4/419fiGx3RwbhRzy9+o8zvxy/V+bf3iz2XgmmHjt1tz/ru+/8Aav2lmi+Xgr0ry+/2/pk7S2nOg7yoVJ0ec6S7SUOrnRXttfoKb6pcTpxG7nMrZ+PpV4KpRqQqQd1mhJSV1xTtwa4NPVCY2GDtKvhMz7VpzWjy5pSXioa+pUy58FZ/VPP3bz9F7T01XD+jp79v9WFsunUWalNrnaSa+DSaM1il43rPr6pf+Xkxztkj4ephpNvdrD8i6j1V2lJtNcEreXwOV2nmtWIxRPXnPk6Gk9nk/civyhyzbzi8VNRt7KjFvvSvb428jr9kUmmkrv3zM/05Xad4vqJ27oiEVx9dwm5x0cXmXjHVfI6s0res0t0nko0tNLRavWOb6ywyahFS97Kr+NtTn034Y3b5JibTt03XDZoAAAAAAAAAAAAAAAAAAAAAAAMHbmz1iKFSi7LPFpN8pcYvykk/Ijy4/aUmvilw5PZ3i/g45szPSnOlNOM4vVc4yi7P8Dyuopas8+Uw9Zgmt45dJdUwVejjqCU0m9M0b2cJdVzS42fR+KO/jti1uHa0eceEvO5aZdDm/T/U+Meuq3HZWEwv5WfLg5u7v+bFcX5XNI0ml0v7lvnz+Hv+bedVqtX+3X5cvjPg1WHc9oYi7TWHp8u7p3ylz6L40q8evz72jalfXxnv8I+d28V7PwbRO959fCO7xn5TOVSMeLS80jvuAtvGU/tx9QI/vDQw6jPFUvYxKS9unKVOU0tLVMtlUSTdlK9uKsyDV3tXBaaz3LGlrWc1Yt03avd+Lk3PNJxjwV3a77uGn4nB0NbWtNrTPL6u1q7RFYrEdUhVbm+XPg15nXi3i5vB4IrvZXl2WIxK9+nTnUV+DyRdk15IiyaGmpy1m07T0Xfa/wDFw8o/9cdw1ZtOUpXbbbfNt6t+p6DhiOUdHBmZmd5WNj01UxmGhL3Z4ihB+Eq0E/gzaeVZYfVpQbAAAAAAAAAAAAAAAAAAAAAAAAAA5dsrZi2jtDaVV1JxjSqxpU2tUpU4qlLR8VmpyutPe4kOr0ePNSN+vit6XW5ME8uceCztfBzwdSClOKc3kpyjO2eX2VzUu75nnr9n6nFb9ETPvj1u9Dj7R02av6piPdPraWdhdg16ss1ZyiublLNNrotXbzJMXZufLbiyztHv5z69bIc3amDDXhwxvPu5R68vitbjYicK+Pw05SeSs3HX6rbyq3dTdI9HXDTFjrWkbQ87lzXy3m953lKpsI1FgLc4Zk4tXTTT6NPRoxasWiYnozWZrO8NfsuhPDOUPeg3mi+61vJq3xOZi004d692+8S7EZP+Rtb+p8/szatdzeVWS72TbbN4rXHznqy6WHiouLSkpK0k1dST4proY4p3QZLcfVx3fTc+eFrf9PCU6FS7hFJylTa4wl+arq0ujtxV30cetx8P7loiffO2/rvUbabJM/orM+UI5sTAYhYzDy7CtaOJo3fZyypxqwbvK1lbxLPt8U12i0c48YRTiyRzms/B9UFRqAAAAAAAAAAAAAAAAAAAAAAAAGLtTHwoUqlab9mnCVR+EIuT+CERuID9FNOUdnqpJ+3XnOrJ9W3aX7Sk/Mky/wAtmIYX0nS/KbO/1UfwM4u/yJTOpUvwImUHg+y23Na2xFCMu5yinF/DDr17yXrj8mO9MkRMqop8wL1Oj1AuqmnpbTvQ23Zi016STw0HxjH0NZpWe5tx28Wm3mn2OExNWleFSnRqzi03pKNOTi7PR6paNGaYaTaImGfbXjvclwW+GKrNLEV5Om7P3aUVGXJu0b24+pD2joePF+1HOO7x/K3odXFMv7k8p7/D8N7Pac4qLUM6bSbjKzjd2vaz0XM87g0lMuTgtfhn3x+Y5+DvajUWxY+OteKPP1/bq+DxEqaUbuSStrxdu89NjrwViu++zyuS/HabbbbttQrKSuvTmjdouAAAAAAAAAAAAAAAAAAAAAAUVqiirsDn/wBK+0nDZ1fWzq5KK8Kk0p/sKZJije0MS3GwsH2OGo0ucKcYv9LKnL43NLTvO7KI/Sa/ymz/APVL8CXF3+TEplKRCyhe+b7PGYDEcEpzov7+SS/ZjU9SWnOswwmsYu5EyyowAupAUuQFOa4Gj3702djP8ir8YNG+P+cebEuFbLwjqVKdKPvVJwpq/BOclFPw1Lczy3YZez9s1MPeMo3pxbTi9HB31s/XT5HO1nZmPUzxRO1vHx8/u6Gk7QyaeOGY3r4eHl9vo7xh4yjGMZSzSSs5cL2GKtq0iLTvPiq5bVteZrG0eC9RruLunZ/PuZujb7DV1OOZefc+gF0AAAAAAAAAAAAAAAAAAU51wugKgNdjal3bktP4gRfezdyONVGM6kowpVVVaST7Syccrvw0k9e9m1bcIr2vtSVKUFlVpXu27LS3px48iK1tlbUaicUxG3VEd+cUqstnySaaxKTi+MZK2hPhneJ8kmPLGSu8Jria8IRlOcowjHWUpNRSXVt6IjiN0rn2+u2P7Xh28PRqToUakZyxDWWKd+ztCL1l/eO70stbNak+OvDPNh03ZdZVKNOqvrwjP9aKf4kMxtOzLMSsYFDYFt6+AHqkBpN+tdnYv/Jmvgb4/wCcEuUfR7h8+Oo9IuVR/cg7ftZSxlnarENfv5huyxmJhbRzc1/7Iqpp+v8AA2xTvWJYl3PD1c8ISTupRjJNapqSTTXqUpbK029LAbDZM8srcn81w/rvA3IHikuqA9AAAAAAAAAAAAAAAt1pNLRf14AYeLU1ByhTUpfZvbztz8LkWa1613pG8pcNaWttedoY+w8ZiJ37WnaOtpWyvwy8/HuK+ly5r/zry8enyWdXiw0/+dufh1+aivPV9bsuqLGcgIdtPGturSqvNkk7NJezr7Mla2muWSfVcyC09Ylyc2SZ4qX57T8PD7SiG81aefCOKzT7RNRvpKpDSKu+F1lu/wA4n0vf5JNFPOfJNcBulVryVXaVRVpJ3jQheNCm/DjN976tNyRLN4jlR0Ui23spVsJWw0FGOelOnFWtGLcWoaLgk7ehpWdp3ZW9z8NWpYOjTrxUasYuLSkpWWZ5VeLa923MXmJtyG3bNRS/gAy8gKXoBHt/av8A27F9exn8jfH/ADhiXNfokqZsa7cqNR+k6av6tepYz/xIVfTNhnDF0qnKpSt96nJ3+E4eg08/pmCXQ9xW3s/CN/8Ahpr0ikvgivk/lLMJFTpmgy8PCzXigKdubSrUmlCleLt7T9pP82y4eZR1Woy45/TX+17SafFlje1v6ZWFcpQUpU3CT+q3e3f18mWsV7WrvaNpVctK0ttWd4ZlKTfFEiNWAAAAAAAAAAAAAAAAARzV36puL8YtoCzODs0nZ9eNu8MT0c9qwdOs6Moxcm3ByTldufCTu7OzadrcupVnlOzhzXgvNJ69Pi0mPmnXwK/x0/V01+6izpf+3ks6Gf1THrudsSsZdQbApuBS5AepgUzqWAsN/wDAGq3qwbrYSvSi7OdNxu9Ur82iPJm9jWcm2+3NLhx+0vFN9t0Q+izdarhalapUlCTcYwWTM7LM273S42Xoa4u0cer3jHExEeO3f5bpdRo7aeI45jn4JJvXQwdRR7d0G6d2+0jGUaanLLrKWibcLW8L8Y3j1WDNkiJxXms+7fn8JhJosuKszGWImPf+W53eVKWHpypNOnZ5XFWTSk1oul07dxLgxTixxSZ3mPr1lX1F4vltaOnqG1USVCVJWt1coxX3ml8rvyA3AAAAAAAAAAAAAAAAAAAAAI9tSHZVs31KmvhJaP8Aj59wHqpgRqrulKeKdV1EqeZVOble98tuCXffyIpx723ULaOZyzbfl1b3DbFw9KMYxpQeVqScoqUsy4SzPVPV8OuhJWIr0W8eKmONqwzmzKR40BRJgeRYCUwLM5AURTbSXF8ANBvRt2FClVUKkO2jKMLWzLNe7i10tGavys9bm9acXKWa2msxaO5TuDtqWL7eTyqMJQjGKXC8Lyk3d3vK9u6K0ve+JxRjiISZs05bbyb77kRxadShlp4rT2ndQqpK2WpbnZK0krqyWq4b0ycPXoh2bnc/ZVTC4Kjh60oyqQUk3G+X2pykkm0m0lJK9tbGl7Ra28Mt3E1FjAPta2Zf3dPh+dJ6X/ru6gbwAAAAAAAAAAAAAAAAAAAAGPjsLGrBwl5Po+TAjkakqMuzqrTk+7quq+QGxjNNXTunzA8A8AXApdgLU30YFq4FDYHro5lbW3VNxa8GtU+9aoDRYj6PsHVlOpU7ZynKU5PtZe9Jtt+rZJGW0MbNnuvunQwKqKi6snUcc0qklJ+xmypKMUklnfK5i95t1Zb5mgplJRV27LvA10qs68uzpXy833dX0XdzAkWDwsacFCPBc+r5tgXwAAAAAAAAAAAAAAAAAAAAALGMwkKkcs1fo+a70wI7idnVqDzQvKHd+MfxXwAUNpxfvKz6rVfxQGbTlGXBpruYHkgLM6gFMpAUgIUuYGVGFgLsYgeVasYrVpeLAwK+1or3Ffvei/iwPcPs2tXalUbjDv4/dj+L+IEhwmFhTjlgrL4t9W+YF4AAAAAAAAAAAAAAAAAAAAAAAAAYOM2VSqauNpdY6P8Ag/MDU193prWnNPx9l+v/AABiTo4mHGM/TN8VcCw8ZK+qV/QCuOP/ADfj/ICuO0F9n4/yA9W07fU/a/kB5/8AqTfBR+LArjTxVTgppeGRersBk0N3pvWpNLw9p+r/AJgbfB7LpU9YxvLrLV/y8gM0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAplBPik/EDCx1OjTg5ypRaXSmm/lp4sjy5Ix14pSYsc5LcMNbsnF0K0nH+zqL46RUlbvaWjK2n1kZp4dtvn/4s6nRThrxb7/Js6dGlfSlBfcV/kXVJmRilwSXgBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAop0ox0jFK7voktXz05mtaxXpDa1pt1lVY2avQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" // Replace with relevant image
              alt="Campaigns"
              className="h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Targeted Campaigns
            </h3>
            <p className="text-gray-600 text-sm">
              Create impactful campaigns and track performance effectively.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUf5zkwTFE1Fn3REnStA0LacekOeWuDQPezg&s" // Replace with relevant image
              alt="AI Engagement"
              className="h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              AI-Powered Engagement
            </h3>
            <p className="text-gray-600 text-sm">
              Enhance customer engagement with cutting-edge AI solutions.
            </p>
          </div>
        </div>

        {/* Sign-In Button */}
        <button
          onClick={signInWithGoogle}
          className="mt-8 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Home;

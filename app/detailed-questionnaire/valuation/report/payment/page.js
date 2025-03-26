import Header from "@/components/Header";

export default function Payment() {
  return (
    <>
      <div className="lg:hidden">
        <Header />
        <main>Payment Page Mobile</main>
      </div>

      <div className="hidden lg:block">
        <main>Payment Page Desktop</main>
      </div>
    </>
  );
}

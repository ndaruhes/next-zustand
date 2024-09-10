import DashboardLayout from "@/app/layouts/DashboardLayout";

export default function Home() {
  return (
      <DashboardLayout>
        <div className="home">
            <div className="jumbotron bg-gray-200 rounded p-5">
                <div className="container">
                    <h1>Hi, Ndaru</h1>
                </div>
            </div>
        </div>
      </DashboardLayout>
  );
}

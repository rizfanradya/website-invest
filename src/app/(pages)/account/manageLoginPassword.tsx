import FormButton from "@/app/components/formButton";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

export default function ManageLoginPassword() {
  return (
    <>
      <label
        htmlFor="manageLoginPassword"
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/80 p-3 rounded-xl">
            <BsFillShieldLockFill size={20} />
          </div>
          <p className="text-sm md:text-base">Kelola Kata Sandi Masuk</p>
        </div>
        <div className="text-blue-500 font-bold">{">"}</div>
      </label>

      <input
        type="checkbox"
        id="manageLoginPassword"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-black">
          <h3 className="text-lg font-bold mb-4">Kelola Kata Sandi Masuk</h3>

          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="oldPassword" className="text-sm">
                Password Lama
              </label>
              <input
                type="password"
                name="oldPassword"
                required
                className="input input-bordered w-full bg-transparent"
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="text-sm">
                Kata Sandi Baru
              </label>
              <input
                type="password"
                name="newPassword"
                required
                className="input input-bordered w-full bg-transparent"
              />
            </div>

            <div>
              <label htmlFor="confNewPassword" className="text-sm">
                Konfirmasi Sandi
              </label>
              <input
                type="password"
                name="confNewPassword"
                required
                className="input input-bordered w-full bg-transparent"
              />
            </div>

            <div className="modal-action">
              <label className="btn btn-warning" htmlFor="manageLoginPassword">
                Close
              </label>
              <FormButton text="Kirimkan" icon={<IoIosSend size={25} />} />
            </div>
          </form>
        </div>

        <label
          className="modal-backdrop cursor-pointer"
          htmlFor="manageLoginPassword"
        ></label>
      </div>
    </>
  );
}

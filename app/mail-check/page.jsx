import ContactForm from "@/components/contact-form"
import ThemeButtom from "@/components/theme-ModeToggle";
import SettingButton from "@/components/setting-icon";

const page = () => {
    return (
        <main className="flex grow flex-col items-center justify-center ">
            <div className="space-y-4">
                <ContactForm />
            </div>
        </main>
    )
}

export default page
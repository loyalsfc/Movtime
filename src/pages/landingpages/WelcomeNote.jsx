
function WelcomeNote({title, subtitle}){
    return(<article>
            <h2 className="text-3xl text-center font-medium">{title}</h2>
            <p className="text-center text-[#BABABA]/[0.7] mb-10">{subtitle}.</p>
    </article>)
}

export default WelcomeNote
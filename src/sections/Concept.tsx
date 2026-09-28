import classes from './Concept.module.css'
export default function Concept(){
    return (
        <section>
            <div className="container">
                <div className={classes.head}>
                    <h2>Flere platforme. Én idé.</h2>
                    <p>Forskellige behov – samme formål: at skabe forbindelser mellem mennesker.</p>
                </div>
                <div className={classes.grid}>
                    <div className={classes.column}>
                        <div className={classes.icon}>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.75 43.7502L34.7083 34.7085" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.9167 39.5833C32.1214 39.5833 39.5833 32.1214 39.5833 22.9167C39.5833 13.7119 32.1214 6.25 22.9167 6.25C13.7119 6.25 6.25 13.7119 6.25 22.9167C6.25 32.1214 13.7119 39.5833 22.9167 39.5833Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>Find</h3>
                        <p>Find det, du har mistet.</p>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.icon}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 45.8332C11.3949 45.8332 10.3351 45.3942 9.5537 44.6128C8.7723 43.8314 8.33331 42.7716 8.33331 41.6665V8.33318C8.33331 7.22811 8.7723 6.1683 9.5537 5.3869C10.3351 4.6055 11.3949 4.16651 12.5 4.16651H29.1666C29.8261 4.16544 30.4793 4.29485 31.0886 4.54728C31.6978 4.79971 32.2512 5.17018 32.7166 5.63734L40.1916 13.1123C40.6601 13.578 41.0316 14.1318 41.2848 14.7418C41.5379 15.3519 41.6677 16.006 41.6666 16.6665V41.6665C41.6666 42.7716 41.2277 43.8314 40.4463 44.6128C39.6649 45.3942 38.605 45.8332 37.5 45.8332H12.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M29.1667 4.1665V14.5832C29.1667 15.1357 29.3862 15.6656 29.7769 16.0563C30.1676 16.447 30.6975 16.6665 31.25 16.6665H41.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.8334 18.75H16.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M33.3334 27.0835H16.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M33.3334 35.4165H16.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <h3>Registrér</h3>
                        <p>Få styr på dine ejendele.</p>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.icon}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.3334 20.8335C33.3334 23.0436 32.4554 25.1632 30.8926 26.7261C29.3298 28.2889 27.2102 29.1668 25 29.1668C22.7899 29.1668 20.6703 28.2889 19.1075 26.7261C17.5447 25.1632 16.6667 23.0436 16.6667 20.8335" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.4646 12.5708H43.5354" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.08333 11.3894C6.54241 12.1107 6.25 12.9879 6.25 13.8894V41.6665C6.25 42.7716 6.68899 43.8314 7.47039 44.6128C8.25179 45.3942 9.3116 45.8332 10.4167 45.8332H39.5833C40.6884 45.8332 41.7482 45.3942 42.5296 44.6128C43.311 43.8314 43.75 42.7716 43.75 41.6665V13.8894C43.75 12.9879 43.4576 12.1107 42.9167 11.3894L38.75 5.83317C38.3619 5.31569 37.8586 4.89567 37.2801 4.60639C36.7015 4.31711 36.0635 4.1665 35.4167 4.1665H14.5833C13.9365 4.1665 13.2985 4.31711 12.7199 4.60639C12.1414 4.89567 11.6381 5.31569 11.25 5.83317L7.08333 11.3894Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <h3>Handl</h3>
                        <p>Køb og sælg kunst og håndværk.</p>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.icon}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.4167 43.75V41.6667C35.4167 40.5616 34.9777 39.5018 34.1963 38.7204C33.4149 37.939 32.3551 37.5 31.25 37.5H18.75C17.645 37.5 16.5852 37.939 15.8038 38.7204C15.0224 39.5018 14.5834 40.5616 14.5834 41.6667V43.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M39.5834 20.8335H41.6667C42.7718 20.8335 43.8316 21.2725 44.613 22.0539C45.3944 22.8353 45.8334 23.8951 45.8334 25.0002V27.0835" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.4166 20.8335H8.33329C7.22822 20.8335 6.16842 21.2725 5.38701 22.0539C4.60561 22.8353 4.16663 23.8951 4.16663 25.0002V27.0835" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25 29.1665C28.4518 29.1665 31.25 26.3683 31.25 22.9165C31.25 19.4647 28.4518 16.6665 25 16.6665C21.5482 16.6665 18.75 19.4647 18.75 22.9165C18.75 26.3683 21.5482 29.1665 25 29.1665Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M37.5 12.4998C39.8012 12.4998 41.6667 10.6344 41.6667 8.33317C41.6667 6.03198 39.8012 4.1665 37.5 4.1665C35.1989 4.1665 33.3334 6.03198 33.3334 8.33317C33.3334 10.6344 35.1989 12.4998 37.5 12.4998Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 12.4998C14.8012 12.4998 16.6667 10.6344 16.6667 8.33317C16.6667 6.03198 14.8012 4.1665 12.5 4.1665C10.1989 4.1665 8.33337 6.03198 8.33337 8.33317C8.33337 10.6344 10.1989 12.4998 12.5 12.4998Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <h3>Deltag</h3>
                        <p>Vær en del af nye fællesskaber og muligheder.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
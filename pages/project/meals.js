import styles from '../../styles/meals.module.css'
import Head from 'next/head'

export default function meals() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <title>project</title>
            </Head>    
            <div className={styles.container}>
                <h1 className={styles.title__main}>Meal Finder</h1>
                <div className={styles['flex-box']}>
                    <form id="submit" className={styles['flex-box']}>
                        <input type="text" id="search" placeholder="Search for meals or keywords" className={styles.input} />
                        <button className={styles.btn__search} type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <button className={styles.btn__random} id="random">
                        <i className="fas fa-random"></i>
                    </button>
                </div>
                <div id="result-heading" className={styles.title__search}><h1> Search Results for ' beef ' :</h1></div>
                <div id="meals" className={styles.gallery}>
                    <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/1529444830.jpg" alt="Beef Lo Mein"/>
                            <div className={styles['gallery-card__details']} data-mealid="52952"> 
                                <h2>Beef Lo Mein</h2>
                            </div>
                        </div>
                    
                        <div className={styles['stylegallery-card']}>
                            <img className={styles['stylegallery-card__img']} src="https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg" alt="Beef Rendang"/>
                            <div className={styles['stylegallery-card__details']} data-mealid="53053"> 
                                <h2>Beef Rendang</h2>
                            </div>
                        </div>
                        <div className={styles['stylegallery-card']}>
                            <img clasName={styles['stylegallery-card__img']} src="https://www.themealdb.com/images/media/meals/1529443236.jpg" alt="Szechuan Beef"/>
                            <div className={styles['stylegallery-card__details']} data-mealid="52950"> 
                                <h2>Szechuan Beef</h2>
                            </div>
                        </div>
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg" alt="Beef Wellington"/>
                            <div className={styles['gallery-card__details']} data-mealid="52803"> 
                                <h2>Beef Wellington</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/svprys1511176755.jpg" alt="Beef stroganoff"/>
                            <div className={styles['gallery-card__details']} data-mealid="52834"> 
                                <h2>Beef stroganoff</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg" alt="Minced Beef Pie"/>
                            <div className={styles['gallery-card__details']} data-mealid="52876"> 
                                <h2>Minced Beef Pie</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg" alt="Beef Bourguignon"/>
                            <div className={styles['gallery-card__details']} data-mealid="52904"> 
                                <h2>Beef Bourguignon</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg" alt="Beef Sunday Roast"/>
                            <div className={styles['gallery-card__details']} data-mealid="52824"> 
                                <h2>Beef Sunday Roast</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg" alt="Beef Dumpling Stew"/>
                            <div className={styles['gallery-card__details']} data-mealid="52873"> 
                                <h2>Beef Dumpling Stew</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg" alt="Braised Beef Chilli"/>
                            <div className={styles['gallery-card__details']} data-mealid="52826"> 
                                <h2>Braised Beef Chilli</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg" alt="Massaman Beef curry"/>
                            <div className={styles['gallery-card__details']} data-mealid="52827"> 
                                <h2>Massaman Beef curry</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg" alt="Beef and Oyster pie"/>
                            <div className={styles['gallery-card__details']} data-mealid="52878"> 
                                <h2>Beef and Oyster pie</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg" alt="Beef and Mustard Pie"/>
                            <div className={styles['gallery-card__details']} data-mealid="52874"> 
                                <h2>Beef and Mustard Pie</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg" alt="Jamaican Beef Patties"/>
                            <div className={styles['gallery-card__details']} data-mealid="52938"> 
                                <h2>Jamaican Beef Patties</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg" alt="Beef Brisket Pot Roast"/>
                            <div className={styles['gallery-card__details']} data-mealid="52812"> 
                                <h2>Beef Brisket Pot Roast</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg" alt="Corned Beef and Cabbage"/>
                            <div className={styles['gallery-card__details']} data-mealid="52998"> 
                                <h2>Corned Beef and Cabbage</h2>
                            </div>
                        </div>
                    
                        <div className={styles['gallery-card']}>
                            <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg" alt="Beef Banh Mi Bowls with Sriracha Mayo, Carrot &amp; Pickled Cucumber"/>
                            <div className={styles['gallery-card__details']} data-mealid="52997"> 
                                <h2>Beef Banh Mi Bowls with Sriracha Mayo, Carrot &amp; Pickled Cucumber</h2>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
    )
}

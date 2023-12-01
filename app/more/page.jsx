import React from 'react'
import Link from 'next/link'

export default function More() {
  return (
    <section style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',

    }}>
        <div style={{
            margin: '1rem 0',
            alignSelf: 'center',
        }}>
        <h2 style={{
            color: 'rgb(94, 94, 3)',
        }}>Mehr Wissen</h2>
<p>über Tarifverträge</p>
        </div>

<h3>Externe Links zu</h3>
<div style={{
    border: '0.4rem solid rgb(228, 230, 173)',
    borderRadius: '1rem',
    padding: '0.2rem',

}}>
<p style={{
          backgroundColor: 'rgb(228, 230, 173)',
          borderRadius: '1rem',
          padding: '1rem',
  
        }}>
<Link href={'https://igmetall.de/tarif/tariflexikon/tarifvertrag2/'}>
Tarif Lexikon
            </Link></p><p> der IG Metal Gewerkschaft</p>
</div>

    </section>
  )
}

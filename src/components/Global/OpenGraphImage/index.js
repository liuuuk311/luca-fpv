import React from 'react';
import { format } from 'date-fns';


const OpenGraphImage = props => {
    const { title, date, readTime } = props;
    return (
        <div style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: `"Lato", Arial, Helvetica, sans-serif`,
            justifyContent: 'space-between',
            height: '314px',
            padding: '48px',
            width: '600px'
        }}>
            <div style= {{
                backgroundColor: '#1c7380',
                borderRadius: '4px',
                color: 'white',
                fontSize: '42px',
                fontWeight: '600',
                lineHeight: '50px',
                padding: '24px',
                width: 'calc(100% - 48px)'
            }}>
                {title}
            </div>
            <div style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div
                    style={{
                        color: '#5e5e5e',
                        fontSize: '18px',
                        fontFamily: `"Avenir Next", Arial, Helvetica, sans-serif`,
                        lineHeight: '26px',
                        fontWeight: 500,
                        textTransform: "uppercase",
                        border: '1px solid #e6e6e6',
                        borderRadius: '4px',
                        padding: '24px',
                    }}
                >
                    
                    {format(new Date(date), 'MMMM dd, yyyy')}
                    &nbsp;&middot;&nbsp;
                    {readTime}
                </div>
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <img 
                        src="http://lucafpv.com/avatar.jpg"
                        style={{
                            borderRadius: '50%',
                            display: 'block',
                            height: '80px',
                            width: '80px'
                        }}
                    />
                      <div style={{
                        color: '#5e5e5e',
                        fontSize: '18px',
                        fontFamily: `"Avenir Next", Arial, Helvetica, sans-serif`,
                        lineHeight: '26px',
                        paddingLeft: '18px',
                        // paddingRight: '16px'
                    }}>
                        Kyle McDonald
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OpenGraphImage;

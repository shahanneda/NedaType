                            {
                                // this just loops from 1 to 10
                                Array.from(Array(10).keys()).map((i) => 
                                    <option className="mim-wpm-dropdown-label" value={i * 15} key={i * 15}>
                                        {i * 15}
                                )
                            }

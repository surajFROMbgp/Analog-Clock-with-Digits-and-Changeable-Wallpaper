
                        function setClock() {
                            const now = new Date();
                            const hour = now.getHours();
                            const minute = now.getMinutes();
                            const second = now.getSeconds();

                            const hourDeg = ((hour % 12) * 30) + 90 + ((minute / 60) * 30); // Add 90-degree offset
                            const minuteDeg = (minute * 6) + 90 + ((second / 60) * 6); // Add 90-degree offset
                            const secondDeg = (second * 6) + 90;

                            document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
                            document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
                            document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
                        }

                        setClock();
                        setInterval(setClock, 1000);
                        


                        document.getElementById('imageInput').addEventListener('change', function(event) {
                            const file = event.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = function(e) {
                                    document.getElementById('chosenImage').style.opacity=0.6;
                                    document.getElementById('chosenImage').src = e.target.result;
                                };
                                reader.readAsDataURL(file);
                            }
                        });
                        // bubble Animation javascript
                        // Number of bubbles to create
                        const numBubbles = 100;

                        // Function to generate random number within a range
                        function getRandom(min, max) {
                            return Math.random() * (max - min) + min;
                        }

                        // Generate bubbles and append them to the body
                        for (let i = 0; i < numBubbles; i++) {
                            const bubble = document.createElement('div');
                            bubble.classList.add('bubble');
                            bubble.style.left = `${getRandom(0, 100)}vw`;
                            bubble.style.animationDuration = `${getRandom(2, 6)}s`;
                            document.body.appendChild(bubble);
                        }

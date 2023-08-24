<template>
    <main>
        <section class="event-page">
            <div class="event-header">
                <h2 class="text-lg-2 txt-black text-white text-center">
                    EVENT ANNOUNCEMENT
                </h2>
                <div class="input-group mt-4 w-50">
                    <span
                        class="input-group-text"
                        id="basic-addon1"
                        @click="searchEvent"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                            /></svg
                    ></span>

                    <input
                        type="text"
                        class="form-control"
                        placeholder="Find by keyword"
                        ref="input"
                    />
                </div>
            </div>
            <div class="event-body">
                <div class="d-flex flex-column pb-5">
                    <h5 class="text-uppercase txt-md txt-semi pb-2">
                        also find by matching tags
                    </h5>
                    <div
                        class="text-uppercase text-sm-1 txt-semi overflow-hidden"
                    >
                        <div class="d-flex tags">
                            <div
                                class="me-2 tag"
                                @click="filterTag('all')"
                                :class="{ 'tag-active': activeTag === 'all' }"
                            >
                                all
                            </div>
                            <div
                                class="mx-2 tag"
                                @click="filterTag('offline')"
                                :class="{
                                    'tag-active': activeTag === 'offline',
                                }"
                            >
                                offline
                            </div>
                            <div
                                class="ms-2 tag"
                                @click="filterTag('online')"
                                :class="{
                                    'tag-active': activeTag === 'online',
                                }"
                            >
                                online
                            </div>
                        </div>
                    </div>
                </div>
                <div class="event-content">
                    <div v-for="(event, index) in events" v-bind:key="index">
                        <EventCard
                            :eventName="event.eventName"
                            :date="event.date"
                            :time="event.time"
                            :status="event.status"
                            :location="event.location"
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import EventCard from "../components/EventCard.vue";

let activeTag = "all";
const events = [
    {
        eventName: "Event Name Event Name Event Name 1",
        date: "thursday, 15 September 2023",
        time: "08.00",
        status: "online",
        location: "Meeting ID: 1234-1234-1234",
    },
    {
        eventName: "Event Name 1",
        date: "Thursday, 15 September 2023",
        time: "08.00",
        status: "online",
        location: "Meeting ID: 1234-1234-1234",
    },
    {
        eventName: "Event Name 1",
        date: "Thursday, 15 September 2023",
        time: "08.00",
        status: "offline",
        location: "House Of Healing Lantai 3",
    },

    {
        eventName: "Event Name 1",
        date: "Thursday, 15 September 2023",
        time: "08.00",
        status: "offline",
        location: "House Of Healing Lantai 3",
    },
];

export default {
    name: "EventView",
    components: { EventCard },
    data() {
        return {
            events,
            activeTag,
        };
    },
    methods: {
        filterTag: function (tag) {
            this.$data.activeTag = tag;
            this.$data.events =
                tag !== "all"
                    ? events.filter((event) => event.status === tag)
                    : events;
        },
        searchEvent: function () {
            console.log("input value:", this.$refs.input.value);
            this.$data.events = events.filter((event) => {
                for (let key in event) {
                    console.log("key: ", key);
                    if (
                        event[key]
                            .toLowerCase()
                            .indexOf(this.$refs.input.value.toLowerCase()) != -1
                    ) {
                        return true;
                    }
                }
                return false;
            });
        },
    },
};
</script>

<style>
.event-page {
    min-height: 100vh;
    text-align: left;
}

.event-header {
    padding: 80px 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/event-header.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.event-body {
    padding: 40px 90px;
    display: flex;
    flex-direction: column;
}

.event-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8vw;
}

.tag-active {
    background-color: var(--bs-brown);
}

.tag {
    border-radius: 15px;
    border: 2px solid var(--bs-black2);
    padding: 0px 20px;
    height: max-content;
    width: max-content;
}

.tags {
    overflow-y: scroll;
}

.tags div {
    cursor: pointer;
}

@media only screen and (max-width: 992px) {
    .event-header {
        padding: 72px 40px;
    }

    .event-body {
        padding: 32px 40px;
    }

    .event-content {
        grid-gap: 5vw;
    }
}

@media only screen and (max-width: 768px) {
    .event-header {
        padding: 60px 16px;
    }

    .event-body {
        padding: 32px 16px;
    }

    .event-content {
        grid-template-columns: 1fr;
    }
}
</style>

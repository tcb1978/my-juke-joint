-- Table: public.tracks

-- DROP TABLE public.tracks;

CREATE TABLE public.tracks
(
    id bigint NOT NULL DEFAULT nextval('tracks_id_seq'::regclass),
    albums_id bigint NOT NULL DEFAULT nextval('tracks_albums_id_seq'::regclass),
    title character varying(100) COLLATE pg_catalog."default" NOT NULL,
    track_length character varying(20) COLLATE pg_catalog."default" NOT NULL,
    file_url character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tracks_pkey PRIMARY KEY (id),
    CONSTRAINT albums_id FOREIGN KEY (albums_id)
        REFERENCES public.albums (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.tracks
    OWNER to hcejwuerkrhrec;
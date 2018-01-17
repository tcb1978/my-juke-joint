-- Table: public.albums

-- DROP TABLE public.albums;

CREATE TABLE public.albums
(
    id bigint NOT NULL DEFAULT nextval('albums_id_seq'::regclass),
    title character varying(100) COLLATE pg_catalog."default" NOT NULL,
    artist_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    release_year character varying(4) COLLATE pg_catalog."default" NOT NULL,
    artwork_url character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT albums_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.albums
    OWNER to hcejwuerkrhrec;